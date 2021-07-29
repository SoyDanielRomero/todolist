function Todo({ todo, index, remove }) {
	function removeItem() {
		remove(index);
	}
	return (
		<div className='todo' onClick={removeItem}>
			{todo.text} (-)
		</div>
	);
}
