import test from 'node:test';
import assert from 'node:assert/strict';
import { privateCardData, downloadCard } from '../src/lib/result-card.js';
import { EVENTS, track } from '../src/lib/analytics.js';

test('分享卡只保留白名单内容，拒绝尺寸、比例、百分位及调用方覆盖', () => {
  const card = privateCardData({
    title: '體型結果', shape: '梨形', note: '不是健康評估', file: 'share.png',
    bust: 91, waist: 66, hips: 102, highHip: 88, percentile: 72,
    bars: [['waist', 66]], lines: [['percentile', '72%']], hero: '66 cm',
    sub: '102 cm', site: 'example.com',
  });
  assert.deepEqual(card, {
    title: '體型結果', shape: '梨形', note: '不是健康評估', file: 'share.png',
    sub: '', hero: '', bars: [], lines: [], site: 'bodyshapetest.org', layout: 'share',
  });
});

test('分享下载统计不携带尺寸或结果链接', () => {
  const calls = [];
  globalThis.window = { gtag: (...args) => calls.push(args) };
  try {
    track(EVENTS.sharePrivateDownload, { waist: 66, url: '?bust=91' });
    assert.deepEqual(calls, [['event', 'share_private_download', {}]]);
  } finally {
    delete globalThis.window;
  }
});

test('实际绘图路径不画入尺寸、比例、百分位，保留站点署名', async () => {
  const painted = [];
  let downloaded = false;
  const context = new Proxy({}, {
    get(target, key) {
      if (key === 'measureText') return text => ({ width: String(text).length * 12 });
      if (key === 'fillText') return text => painted.push(String(text));
      return () => {};
    },
  });
  globalThis.document = {
    createElement(tag) {
      if (tag === 'canvas') return { getContext: () => context, toBlob: callback => callback(new Blob(['image'])) };
      return { click: () => { downloaded = true; } };
    },
  };
  try {
    const ok = await downloadCard(privateCardData({
      title: '體型結果', shape: '梨形', note: 'FFIT 分類，非健康評估', file: 'share.png',
      bust: 91, waist: 66, hips: 102, percentile: 72,
    }));
    assert.equal(ok, true);
    assert.equal(downloaded, true);
    assert.ok(painted.includes('梨形'));
    assert.ok(painted.includes('bodyshapetest.org'));
    assert.equal(painted.some(text => /91|66|102|72|cm|%/.test(text)), false);
  } finally {
    delete globalThis.document;
  }
});
