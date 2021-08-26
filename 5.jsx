// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Cards = ({ amount }) => {
  const [clickedNum, setClickedNum] = React.useState(-1);
  const amountArray = [...Array(amount).keys()];

  const onCardClickHandler = (num) => {
    setClickedNum(num);
  };

  const CardItem = amountArray.map((item, idx) => (
    <td key={idx} onClick={() => onCardClickHandler(idx)}>
      {clickedNum === item ? "up" : "down"}
    </td>
  ));

  return (
    <table>
      <tbody>
        <tr>{CardItem}</tr>
      </tbody>
    </table>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Cards amount={4} />, rootElement);

let row = document.getElementById("root").getElementsByTagName("tr")[0];
if (row) {
  let cell = row.getElementsByTagName("td")[1];
  if (cell) {
    cell.click();
  }
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));
