import Link from "next/link";
import ServeLangItem from "../ServeLangItem";
export default function CategoryCard({
  background,
  title,
  categories = [],
  changeIdHandler,
  productsInCategoryIds,
  moreUrl = "#",
}) {
  const filterCategory =
    categories &&
    categories.length > 0 &&
    categories.filter((category) => {
      const id = parseInt(category.category_id);
      return productsInCategoryIds.includes(id);
    });
  return (
    <div
      className="category-card-wrappwer w-full h-full p-[30px]"
      style={{
        background: `url(${
          background || `/assets/images/section-category-1.jpg`
        }) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <div>
        <h1 className="text-base font-600 tracking-wide mb-2">{title}</h1>
        <div className="brands-list mb-[7px]">
          <ul>
            {filterCategory.map((category) => (
              <li key={category.id}>
                <span
                  onClick={() => changeIdHandler(category.category_id)}
                  className="text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-[var(--text-color)] capitalize cursor-pointer"
                >
                  {category && category.category.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <Link href={`${moreUrl}`} legacyBehavior>
          <div className="flex space-x-2 rtl:space-x-reverse items-center cursor-pointer">
            <span className="text-[var(--text-color)] font-600 text-sm">
              {ServeLangItem()?.Shop_Now}
            </span>
            <span>
              <svg
                className={`transform rtl:rotate-180`}
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2.08984"
                  y="0.636719"
                  width="6.94219"
                  height="1.54271"
                  transform="rotate(45 2.08984 0.636719)"
                  fill="#1D1D1D"
                />
                <rect
                  x="7"
                  y="5.54492"
                  width="6.94219"
                  height="1.54271"
                  transform="rotate(135 7 5.54492)"
                  fill="#1D1D1D"
                />
              </svg>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
