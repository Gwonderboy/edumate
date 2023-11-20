function AddScore() {
  return (
    <div className="container">
      <h3>Add Score</h3>

      <form>
        <label>Student Email</label>
        <br />
        <input type="text" className="input-fields" />
        <br />
        <br />
        <label>Score</label>
        <br />
        <input type="number" className="input-fields" />
        <br />
        <br />
        <input type="submit" className="button" />
      </form>
    </div>
  );
}

export default AddScore;
