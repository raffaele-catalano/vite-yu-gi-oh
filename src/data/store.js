import { reactive } from 'vue';

export const store = reactive ({
    apiURL      : "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardsArray  : [],
    cardsType   : [],
    cardNum     : 30,
    cardOffset  : 0,
    isLoading   : true,
    optionType  : null
})