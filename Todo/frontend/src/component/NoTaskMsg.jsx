function NoTaskMsg() {
  return (
    <div className="alert alert-light border text-center mb-0" role="status">
      <h2 className="h5">You are all caught up.</h2>
      <p className="mb-0 text-secondary">Add a task above to get started.</p>
    </div>
  );
}

export default NoTaskMsg;
