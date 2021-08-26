// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const CommentList = (props) => {
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onPosetClickHandler = (e) => {
    e.preventDefault();
    if (text) {
      let ul = document.getElementById("list");
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(text));
      ul.appendChild(li);
      setText("");
    }
  };

  return (
    <div>
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <input type="button" value="Post" onClick={onPosetClickHandler} />
      </form>
      <ul id="list"></ul>
    </div>
  );
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<CommentList />, rootElement);

var input = document.querySelector("input[type='text']");
input.value = "test";
input._valueTracker.setValue("");
input.dispatchEvent(new Event("change", { bubbles: true }));

document.querySelector("input[type='button']").click();
console.log(document.getElementsByTagName("ul")[0].innerHTML);
