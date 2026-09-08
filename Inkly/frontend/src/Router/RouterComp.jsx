function RouterComp() {
  return (
    <>
      <BrowerRouter>
        <Routes>
          <Route path="/" element="Login" />
          <Route path="/signup" element="Signup" />
          <Route path="/dashboard" element="Dashboard" />
          <Route path="*" element="404PageNotFound" />
        </Routes>
      </BrowerRouter>
    </>
  );
}
export default RouterComp;
