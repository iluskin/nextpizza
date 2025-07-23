import { Container, Filters, SortPopup } from "@/components/shader";
import { Categories } from "@/components/shader/categories";
import { ProductCard } from "@/components/shader/product-card";
import { ProductsGroupList } from "@/components/shader/products-group-list";
import { Title } from "@/components/shader/title";
import { TopBar } from "@/components/shader/top-bar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className=" mt-10 pb-14">
        <div className="flex gap-[70px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список творов */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 2,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 3,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 4,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 5,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 6,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 7,
                    name: "Сырный цыплёнок",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d610e8bbb248f31270be742b4bd.avif",
                    price: 200,
                    items: [{ price: 220 }],
                  },
                ]}
              />

              <ProductsGroupList
                title={"Комбо"}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                  {
                    id: 2,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                  {
                    id: 3,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                  {
                    id: 4,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                  {
                    id: 5,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                  {
                    id: 6,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                  {
                    id: 7,
                    name: "Завтрак на двоих",
                    imageUrl: "https://media.dodostatic.net/image/r:292x292/0195961e5fa872078ea9ad5524ba05d4.avif",
                    price: 380,
                    items: [{ price: 380 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
