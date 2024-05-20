import "./Page404.scss";
import Button from "~/components/Button";
import { useTranslation } from 'react-i18next';

function Page404() {
  const { t } = useTranslation('home');
  return (
    <div className="site-wrapper">
      <section className="page404 pg">
        <div className="row justify-content-center align-items-center m-0">
          <div className="col-lg-6 col-md-7">
            <div>
              <h3>404</h3>
              <h4>Page Not Found</h4>
              <p>
                  {t('Were sorry, the page you are looking for does not exist. Please check the link or return to the homepage to explore more exciting content. Were here to assist you')}
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
