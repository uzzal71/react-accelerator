/**
  Game,
    -> Board
      -> Square
    -> History
*/

function Square({ value, onSquareClick }) {
  return (
    <button
      type="button"
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const handleClick = (i) => {
    alert(i);
  };

  return (
    <>
      <div>
        <Square value="1" onSquareClick={() => handleClick(0)} />
        <Square value="2" onSquareClick={() => handleClick(1)} />
        <Square value="3" onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value="4" onSquareClick={() => handleClick(3)} />
        <Square value="5" onSquareClick={() => handleClick(4)} />
        <Square value="6" onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value="7" onSquareClick={() => handleClick(6)} />
        <Square value="8" onSquareClick={() => handleClick(7)} />
        <Square value="9" onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
