function ErrorPage() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>

        <h2 className="mb-3">Page Not Found</h2>

        <p className="text-muted mb-4">
          Sorry, it seems there was an error. The page you are looking for does
          not exist.
        </p>

        <a href="/" className="btn btn-primary">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
