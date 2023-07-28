import AnimatedTransition from "../AnimatedTransition";
import { Helmet } from "react-helmet";

// En caso de tener una ruta mal, o cualquier error, se redirigira aqui para mostrarlo.
function ErrorView() {
  return (
    <AnimatedTransition>
      <Helmet>
        <title>Blocksidian | Not Found</title>
      </Helmet>
      <ErrorItem />
    </AnimatedTransition>
  );
}

export default ErrorView;

function ErrorItem() {
  return (
    <>
      <section className="py-10 my-auto flex flex-col items-center">
        <h1 className="w-fit text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-l from-purple-400 to-purple-800">
          404
        </h1>
        <h2 className="w-fit text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-800">
          Not Found
        </h2>
      </section>
    </>
  );
}
