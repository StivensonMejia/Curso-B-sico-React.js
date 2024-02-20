function TodoCounter({ completed, total }) {
    return (
        <p className='todoCounter'>
            Completed {completed} of {total}
        </p>
    );
}
export {TodoCounter};