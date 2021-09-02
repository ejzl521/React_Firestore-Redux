import './App.css';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

// Firestore와 통신하는 함수
import { loadBucketFB, createBucketFB, updateBucketFB, deleteBucketFB } from './redux/modules/bucket';

function App() {

  const dispatch = useDispatch();
  useEffect(() => { dispatch(loadBucketFB()) }, [])


  return (
    <div className="App">
      <button onClick={
        () => { dispatch(createBucketFB("농구하기")) }}>데이터 추가
      </button>
      <button onClick={
        // firestore에서 첫번째 문서 수정
        () => { dispatch(updateBucketFB(0)) }}>데이터 수정
      </button>
      <button onClick={
        // firestore에서 첫번째 문서 삭제
        () => { dispatch(deleteBucketFB(0)) }}>데이터 삭제
      </button>
    </div>
  );
}

export default App;