<script>
  let items = [
    {
      url: "/shop/getraenkedosen",
      name: "Getränkedosen",
      description:
        " Beliebt vor allem bei der Jugend ent&shy;hält jede Dose 100% Fluffy-Flavoury. Garantiert! Er&shy;hältlich in den Geschmacks&shy;richtungen “Zitrone“ und “Orange“. ",
      image: "/images/shop/limo1.png",
      price: "1,99",
    },
    {
      url: "/shop/bitter-lemon",
      name: "Bitter Lemon",
      description:
        "Die Königin un&shy;serer Produkt&shy;palette. Ungemein lecker und er&shy;frischend! Ideal für den nächsten Drink!",
      image: "/images/shop/bitter_lemon-preview.png",
      price: "2,49",
    },
    {
      url: "/shop/familienglueck",
      name: "Familienglück",
      description:
        "Die leck&shy;ere Limo&shy;nade für die ganze Familie. Er&shy;hältlich in den Geschmacks&shy;richtungen “Orange“ und “Himbeer“. ",
      image: "/images/shop/limo_familienpack.png",
      price: "6,99",
    },
    {
      url: "/shop/mehrwegkiste",
      name: "Mehrwegkiste",
      description:
        "Fluffy gibt es natürlich auch in der kosten&shy;günstigen Mehrweg&shy;kiste. Diese schont die Um&shy;welt und den Geld&shy;beutel. ",
      image: "/images/shop/limo_kiste.png",
      price: "10,99",
    },
  ];
</script>

<section
  class="grid grid-cols-1 gap-3 my-4 justify-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:gap-y-6"
>
  {#each items as item}
    <div
      class="relative w-5/6 p-4 overflow-hidden transition duration-500 shadow-lg hover:translate-y-1 hover:shadow-xl sm:w-2/3 md:w-64 bg-blue-50 dark:bg-bluegray-800 rounded-2xl"
    >
      <img
        alt={item.name}
        src={item.image}
        class="absolute w-40 h-auto mb-4 -right-20 -bottom-8"
      />
      <div class="w-4/6">
        <h3 class="no-underline hover:underline">
          <a
            class="mb-2 text-lg font-medium lg:text-xl font-kyivsans text-bluegray-800 dark:text-bluegray-100"
            href={item.url}>{item.name}</a
          >
        </h3>
        <p>
          <a
            class="text-xs font-kyivsans lg:text-base text-bluegray-400 dark:text-bluegray-300 line-clamp-4"
            href={item.url}
          >
            {@html item.description}
          </a>
        </p>
        <p class="text-xl font-medium text-lemon-500 font-kyivsans">
          € {item.price}
        </p>
      </div>
    </div>
  {/each}
</section>
