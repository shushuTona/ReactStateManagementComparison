# React State Management Comparison

Reactでの状態管理方法が色々あるから実際に触って比較してみる

- [useContext & useReducer](https://ja.reactjs.org/docs/hooks-reference.html#usecontext)
- [Redux & Redux Toolkit](https://redux-toolkit.js.org/)
- [Recoil](https://recoiljs.org/)

## useContext & useReducer

- 元々Reactが持っている機能で実装できるのが良いと感じた
- `useContext`でstateを読み込んでいるコンポーネントは、他のstateが更新された際にも再描画が走ってしまうため、contextを分けたり、`useMemo`を使用したり、という調整が必要
    - 1つのcontextに複数のstateを詰め込んで運用するのは大変だったりしそう
    - これらの調整だったりに問題なければ、使いやすい気がした

## Redux & Redux Toolkit

- `createSlice`で各状態を作成して、`configureStore`に`reducer`を渡す。って流れは分かりやすかった
- `createAsyncThunk`で非同期処理も扱えて、`pending`・`fulfilled`・`rejected`のactionがあるのも良い
- 使い方が定められているから`useContext & useReducer`よりも組織でコードを扱いやすそうな気がした

## Recoil

- `atom`と`selector`で個別にstateを作成できるのは、1つのファイルが大きくならなくて良いと感じた
- `useRecoilState`・`useRecoilValue`・`useSetRecoilState`で必要な値を取得できるのも良い
- 非同期処理も同じ`selector`の仕組みで実装できるのは良い
- `Suspense`や`ErrorBoundary`というReactに備わっている方法で管理ができるのも良い
- `reducer`の`action`で更新する方法とは違う更新方法になるから、少し手探り感が残る
