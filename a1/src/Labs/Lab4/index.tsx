import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DataStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
import CounterRedux from "./ReduxExamples/CounterRedux";
import AddRedux from "./ReduxExamples/AddRedux";
export default function Lab4() {
  function sayHello() {
    alert("hello");
  }
  return (
    <div id="wd-lab4" className="max-w-4xl mx-auto space-y-8 lab_specific">
      <h2 className="text-3xl font-bold mb-4">Lab 4</h2>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExamples />
      <CounterRedux />
      <AddRedux />
    </div>
  );
}
