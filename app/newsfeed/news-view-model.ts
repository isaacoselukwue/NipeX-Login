import { SearchBar } from "ui/search-bar";
import { ObservableProperty } from "./observable-property-decorator";
import { Observable, PropertyChangeData } from 'data/observable';
import { isIOS } from "tns-core-modules/platform";

declare const IQKeyboardManager: any;

interface Source {
    id: string;
    name: string;
}

export class HomeViewModel extends Observable {
    @ObservableProperty() searchPhrase: string;


    // https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=<4003454c52d042f89dff796274aa28d4>

    allNews: { source: Source, author: string, title: string, description: string, url: string, urlToImage: string }[] = [{
        "source": { "id": "nnpcgroup", "name": "NNPC GROUP" }, "author": "https://www.nnpcgroup.com", "title": "At Houston, Baru Says 41Billion Barrels of Crude Oil Remain Untapped", "description": "The Group Managing Director of the Nigerian National Petroleum Corporation(NNPC), Dr.Maikanti Baru, has stated that more than 41billion barrels of crude oil and 319trillion cubic feet of gas are yet to be discovered in Sub - Saharan Africa.", "url": "https://www.nnpcgroup.com/PublicRelations/NNPCinthenews/tabid/92/articleType/ArticleView/articleId/1150/At-Houston-Baru-Says-41Billion-Barrels-of-Crude-Oil-Remain-Untapped.aspx", "urlToImage": "https://i1.wp.com/leadership.ng/wp-content/uploads/2018/02/689abfe6-maikanti-baru.jpg?fit=279%2C181&ssl=1&resize=1280%2C720"
    }, { "source": { "id": "nnpcgroup", "name": "NNPC GROUP" }, "author": "http://www.facebook.com/matt.zapotosky", "title": "NNPC to Build, Fertilizer Plants in Brass, Additional Power Plants in Abuja, Kaduna, Kano", "description": "NNPC to Build, Fertilizer Plants in Brass, Additional Power Plants in Abuja, Kaduna, Kano.", "url": "https://www.nnpcgroup.com/PublicRelations/NNPCinthenews/tabid/92/articleType/ArticleView/articleId/1139/NNPC-to-Build-Fertilizer-Plants-in-Brass-Additional-Power-Plants-in-Abuja-Kaduna-Kano.aspx", "urlToImage": "https://www.nigeriaelectricityhub.com/wp-content/uploads/gas-power-plant-turkey.jpg" }, {
        "source": { "id": "nnpcgroup", "name": "NNPC GROUP" }, "author": "https://www.nnpcgroup.com", "title": "Stiff Penalty Awaits Defaulters of Due Process in Procurement – Baru", "description": "Stiff Penalty Awaits Defaulters of Due Process in Procurement – Baru", "url": "https://www.nnpcgroup.com/PublicRelations/NNPCinthenews/tabid/92/articleType/ArticleView/articleId/1138/Stiff-Penalty-Awaits-Defaulters-of-Due-Process-in-Procurement-Baru.aspx", "urlToImage": "http://nigeriannewsdirect.com/wp-content/uploads/2017/10/Maikanti-Baru-e1498085229148.jpg"
    }, { "source": { "id": "dailypost", "name": "Dailypost.ng" }, "author": "Dailypost.ng", "title": "US releases evidence of massive corruption under Buhari govt - Daily Post Nigeria", "description": "US releases evidence of massive corruption under Buhari govt - Daily Post Nigeria", "url": "http://dailypost.ng/2019/03/17/us-releases-evidence-massive-corruption-buhari-govt/", "urlToImage": "http://dailypost.ng/wp-content/uploads/2018/04/buhari-thinks1.jpg" }, {
        "source": { "id": "Independent", "name": "Independent.ng" }, "author": "Independent.ng", "title": "Why FG Must Revive Cotton Farming In Nigeria – KADCCIMA - Independent Newspapers Limited", "description": "The Kaduna State Chamber of Commerce, Industry, Mines and Agriculture (KADCCIMA) says increasing cotton farming is the first step towards reviving local textile companies in the country. The Director-General of KADCCIMA, Alhaji Usman Saulawa said this when th.", "url": "https://www.independent.ng/why-fg-must-revive-cotton-farming-in-nigeria-kadccima/", "urlToImage": "https://www.independent.ng/why-fg-must-revive-cotton-farming-in-nigeria-kadccima/"
    }];

    searching = false;

    toggleSearch = function () {
        this.set("searching", !this.get("searching"));
    }

    // filter out news items with no images/title/desc/source name
    news = this.allNews.filter(function (e) {
        return e.urlToImage && e.title && e.description && e.source.name;
    });

    _refilter() {
        let news = this.allNews;
        let f = this.searchPhrase.trim().toLowerCase();

        this.news = this.allNews.filter(function (e) {
            return (e.urlToImage && e.title && e.description && e.source.name) &&
                (e.description.toLowerCase().includes(f) || e.title.toLowerCase().includes(f));
        });

        this.set("news", this.news.slice(0));
    }

    onSearchSubmit(args): void {
        this._refilter();
        let searchBar = <SearchBar>args.object;
        searchBar.dismissSoftInput();
    }

    onClear(): void {
        this._refilter();
    }

    constructor() {
        super();

        this.on(Observable.propertyChangeEvent, (propertyChangeData: PropertyChangeData) => {
            if (propertyChangeData.propertyName == "searchPhrase") {
                this._refilter();
            }
        });

        if (isIOS) {
            var keyboard = IQKeyboardManager.sharedManager();
            keyboard.shouldResignOnTouchOutside = true;
        }
    }
}
