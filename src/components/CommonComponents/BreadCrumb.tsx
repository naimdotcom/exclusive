import { useLocation, Link } from "react-router-dom";
import { cn } from "../../utils/cn";

function BreadCrumb() {
  const { pathname } = useLocation();
  let BreadCrumbPath = "";
  const pathSlice = pathname.split("/").filter(Boolean);
  return (
    <div className="flex ">
      {pathSlice.map((item, index) => {
        // if (index === pathSlice.length - 1) return null;
        BreadCrumbPath += `/${item}`;
        return (
          <div key={index}>
            {index !== pathSlice.length - 1 ? (
              <>
                <Link
                  className={cn("text-black/60", {
                    "text-black": index === pathSlice.length - 1,
                  })}
                  key={index}
                  to={BreadCrumbPath}
                >
                  {item}
                </Link>
                <span className="mx-2">/</span>
              </>
            ) : (
              <p
                className={cn("text-black/60", {
                  "text-black": index === pathSlice.length - 1,
                })}
                key={index}
              >
                {item}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default BreadCrumb;
