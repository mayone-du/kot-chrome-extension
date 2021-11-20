# KOT Chrome Extension

## Note

```
npm run export
```

で/extentions/dist に出力される

chrome.tabs...のような chromeAPI を使用したい場合は、dynamic import で SSR を false にしないといけない。

### WASM の build

/wasm に移動し、

```
wasm-pack build
```

を実行してビルドする。/wasm/pkg に ts ファイルが出力されるため、それを import している

## TODO

- 確認するたびにビルド（npm run export）しないといけなくて、開発効率が悪い
