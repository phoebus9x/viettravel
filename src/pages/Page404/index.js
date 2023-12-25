import "./Page404.scss";
import Button from "~/components/Button";
function Page404() {
  return (
    <div className="site-wrapper">
      <section className="page404 pg">
        <div className="row justify-content-center align-items-center m-0">
          <div className="col-lg-6 col-md-7">
            <div>
              <h3>404</h3>
              <h4>Page Not Found</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna
                molestie at elementum eu facilisis.
              </p>
              <div className="mt-4 d-flex justify-content-start">
                <Button className={"globalBtnActive"}>Back To Home</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page404;
