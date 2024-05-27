import { Link, useNavigate, useParams } from "react-router-dom";
import { CaretLeft, CaretRight, House } from "phosphor-react";

export interface Ibreadcrumb {
  list: {
    step1: {
      navigate: string;
      name: string;
    };
    step2?: {
      navigate: string;
      name: string;
    };
    step3?: {
      navigate: string;
      name: string;
    };
    lastStep: string;
  };
}

export function Breadcrumb({ list }: Ibreadcrumb) {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const isMainScreen = !list.step2 && !list.step3 && !id;

  return (
    <nav className="flex">
      <ol className="inline-flex items-center space-x-1">
        {isMainScreen ? (
          <li className="text-lg  items-start inline-flex">
            <Link
              className="text-md inline-flex items-center gap-2 font-medium text-gray-700 transition"
              to={list.step1.navigate}
            >
              {/* <House weight="fill" size={24} />
              <p>Tela Principal</p> */}
            </Link>
          </li>
        ) : (
          <>
            <li className=":sm:hidden text-lg items-center inline-flex">
              <Link
                className="text-md inline-flex items-center gap-2 font-medium text-gray-700 transition"
                to={list.step1.navigate}
              >
                <House size={20} />
                {list.step1.name}
              </Link>
              {list.step2 && (
                <>
                  <CaretRight size={20} />
                  <Link
                    className="text-md inline-flex items-center gap-2 font-medium text-gray-700 transition"
                    to={list.step2.navigate}
                  >
                    {list.step2.name}
                  </Link>
                </>
              )}
            </li>
            {list.step3 && (
              <li className="sm:hidden inline-flex text-lg items-center">
                <CaretRight size={20} />
                <Link
                  className="text-md inline-flex items-center gap-2 font-medium text-gray-700 transition"
                  to={list.step3.navigate}
                >
                  {list.step3.name}
                </Link>
              </li>
            )}
            <li className="hidden text-lg items-center md:inline-flex">
              <div className="flex items-center">
                <CaretLeft
                  size={20}
                  className="inline-flex md:hidden text-lg"
                  onClick={() => {
                    const destination =
                      list.step3?.navigate || list.step2?.navigate || "/";
                    navigate(destination);
                  }}
                />
                <CaretRight size={20} className="inline-flex text-lg" />
                <span className="text-md font-medium transition ml-1 inline-flex cursor-default items-center text-amareloFood">
                  {id || list.lastStep}
                </span>
              </div>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
}
