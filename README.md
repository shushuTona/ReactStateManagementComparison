# React State Management Comparison

Reactでの状態管理方法が色々あるから実際に触って比較してみる

- [useContext](https://ja.reactjs.org/docs/hooks-reference.html#usecontext)
- [React Redux](https://react-redux.js.org/)
- [Recoil](https://recoiljs.org/)

## useContext & useReducer

- 元々Reactが持っている機能で実装できるのが良いと感じた
- useContextでstateを読み込んでいるコンポーネントは、他のstateが更新された際にも再描画が走ってしまうため、contextを分けたり、useMemoを使用したり、という調整が必要
    - 1つのcontextに複数のstateを詰め込んで運用するのは大変だったりしそう
    - これらの調整だったりに問題なければ、使いやすい気がした
