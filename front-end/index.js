const {createApp, ref} = Vue;

const app = createApp({
    setup() {

        const urlFood = "http://localhost:7000/makanan";
        const urlDrink = "http://localhost:7000/minuman";
        const food = ref([]);
        const drink = ref([]);

        const getFood = async () => {
            const res = await axios.get(urlFood);
            food.value = res.data;
            drink.value = [];
            console.log(food);
        };

        const getDrink = async () => {
            const res = await axios.get(urlDrink);
            drink.value = res.data;
            food.value = [];
            console.log(drink);
        };

        return{
           getFood,
           getDrink,
           food,
           drink,
        };
    },
});

app.mount("#app");