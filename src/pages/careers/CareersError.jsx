import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export function CareersError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div>
          <p>This page doesn't exist!</p>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }

    if (error.status === 401) {
      return (
        <div>
          <p>You aren't authorized to see this</p>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }

    if (error.status === 503) {
      return (
        <div>
          <p>Looks like our API is down</p>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }

    if (error.status === 418) {
      return (
        <div>
          <p>🫖</p>
          <Link to="/">Back to Home page</Link>
        </div>
      );
    }
  }

  return <div>Something went wrong</div>;
}
