// 1. 액션타입
// 2. 액션을 리턴해주는 함수
// 3. 초기값
// 4. 리듀서 만들기

// import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";
import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

// 액션타입
// export const INCREASE = "counter/INCREASE" as const;
// export const DECREASE = "counter/DECREASE" as const;
// export const INCREASE_BY = "counter/INCREASE_BY" as const;

// typesafe-actions 설치후
export const INCREASE = "counter/INCREASE";
export const DECREASE = "counter/DECREASE";
export const INCREASE_BY = "counter/INCREASE_BY";


// 액션 생성함수
// typesafe-actions 설치후 주석처리함
// export const increase = () => ({ type: INCREASE })
// export const decrease = () => ({ type: DECREASE })
// export const increaseBy = (diff: number) => ({ 
//     type: INCREASE_BY,
//     payload: diff
// })
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

// 스테이트의 타입을 지정
type CounterState = {
    count: number;
}

// 초기상태 생성
const initialState = {
    count: 0
}

// 리듀서 액션 타입지정
// ReturnType<typeof ---> 특정함수의 반환값을 추론

// 리듀서 액션 타입지정
// typesafe-actions 설치후 주석처리함
// type CounterAction = 
// | ReturnType<typeof increase>
// | ReturnType<typeof decrease>
// | ReturnType<typeof increaseBy>
const actions = {increase, decrease, increaseBy}
type CounterAction = ActionType<typeof actions>

// 리듀서 만들기
// typesafe-actions 설치후 주석처리함
// export default function counter(state: CounterState = initialState, action: CounterAction) : CounterState{
//     switch(action.type) {
//         case 'counter/INCREASE':
//             return { count: state.count + 1 };
//         case 'counter/DECREASE':
//             return { count: state.count - 1 };
//         case 'counter/INCREASE_BY':
//             return { count: state.count + action.payload };
//         default:
//             return state;
//     }
// }
// createRecuer을 통해서 오브젝트맵 형태로 리듀서를 구현
const counter = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1 }),
    [DECREASE]: state => ({ count: state.count -1 }),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
})
export default counter; 