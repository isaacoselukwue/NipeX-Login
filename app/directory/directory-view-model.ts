import { SearchBar } from "ui/search-bar";
import { ObservableProperty } from "./observable-property-decorator";
import { Observable, PropertyChangeData } from 'data/observable';
import { isIOS } from "tns-core-modules/platform";

declare const IQKeyboardManager: any;

export class HomeViewModel extends Observable {
    @ObservableProperty() searchPhrase: string;

    allPeople: { name: string, title: string, email: string, imageSrc: string }[] = [
        { name: "Kenechukwu Amilo", title: "Developer Advocate", email: "kenechukwu.amilo@nipex.com.ng", imageSrc: "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/4302_103800940609_2639865_n.jpg?_nc_cat=110&_nc_eui2=AeG4r7acr1ZRVVn3S0UXYy0Zomf6vUs4fHRjecPQYaosbK-x1LoISVPk6CV7ZUaB07N5bXDq0qdlZ-t7NRX8-aqaMEQFG5GQASNgp2QcyVPFDVnKoLheEhhzftSpjnd9wRs&_nc_ht=scontent.flos6-1.fna&oh=e7a8e861376be6e899863a682414f949&oe=5D029FCB" },
        { name: "Innocent Joseph", title: "VP Engineering", email: "innocent.joseph@nipex.com.ng", imageSrc: "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-1/c0.0.381.381a/198713_10150266129173555_585114_n.jpg?_nc_cat=105&_nc_eui2=AeH9v7ZOyAG6ZbYcWTxlc6Iu4424NpDrQ8p4jipOQKQfkaK8ybjU1x6x3PgBaPS4uKZLCkiAY_pOTJhQBWQXoWXx4Pc1QMYKdRz2lddKmH8KcZFofHyipodBiYIRKUUxGrk&_nc_ht=scontent.flos6-1.fna&oh=107ee78b2533e7763e14529b4444c72e&oe=5D4EA849" },
        { name: "Olutoni Okelana", title: "Social Media Coordinator", email: "olutoni.okelana@nipex.com.ng", imageSrc: "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/557045_10151479442140714_1460010801_n.jpg?_nc_cat=109&_nc_eui2=AeFvJiJ2_eaGl0TwY1K3QA5sLBvFf85tyRr8cJci3k9Ltg7b1SUoRcWV4XvhROKQq4_Vo9ATil93JALtn2JfbuICoRw-aFFfJ4gG7UCngxGm9U3567ygfk5sVtb-UnDIIdQ&_nc_ht=scontent.flos6-1.fna&oh=bc191511db45432d5ae383f5e3a5bcb3&oe=5D167E9B" },
        { name: "Abdu Dakata", title: "Product Marketing Manager", email: "abdu.dakata@nipex.com.ng", imageSrc: "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/50652002_10157235333149653_5761393934014087168_n.jpg?_nc_cat=108&_nc_eui2=AeFxTddFDyotEbRNGhiKYbTTXOcX2Pv5faFV5r_B3mstyx6PvzF1bRCyCl1RfA6hrqCIJnH9dL0_M9ewi4GLCZBTXnP7JLLec3-VLcfoxjoiwFYHqKriI6xeKkfPVKpBIxg&_nc_ht=scontent.flos6-1.fna&oh=55a624014ca4ee81611616396dc927e4&oe=5D184B04" },
        { name: "Chuma Chukwudozie", title: "Supervisor SAP", email: "chuma.chukwudozie@nipex.com.ng", imageSrc: "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/13669697_10154517714897722_463385005059309809_n.jpg?_nc_cat=103&_nc_eui2=AeGtng0EqL2rWzuU9UZ20dC9siueMt5gFBKw2Sb_uc9MBIalfMQxNqhEUFdJalCH993fnVbfN4tlOq-LiRRqD-Fj100Hj62rrIm-7TRVfSOCssjCZC2IyU-2slUJGGnOa4A&_nc_ht=scontent.flos6-1.fna&oh=f236e9c5711788c3217c1c1b569a0a2c&oe=5D231DC7" },
        { name: "Isaac Oselukwue", title: "Engineering Intern", email: "isaac.oselukwue@nipex.com.ng", imageSrc: "https://scontent.flos6-1.fna.fbcdn.net/v/t1.0-9/37161455_2224527130908058_7149126746711785472_n.jpg?_nc_cat=107&_nc_eui2=AeH3AWmE3UONneyFWOxXJIz5MCkiaYh3I72Y1Apo-0BofydELXl38S-UN6Fvormk2MnGsAjLR31O1c4U9Wvo9853h-MFZLx7IogofWawUQvLeWh_cwpsg9neDgjMf0GPVn4&_nc_ht=scontent.flos6-1.fna&oh=41e7c9c48cfd9eb61d85a1c6b11a969f&oe=5D1B872B" }

    ];

    people = this.allPeople;

    _refilter() {
        let people = this.allPeople;
        let f = this.searchPhrase.trim().toLowerCase();

        this.people = this.allPeople.filter(function (e) {
            // console.log(e.name.toLowerCase());
            // console.log(e.name.toLowerCase().includes(f));
            return e.name.toLowerCase().includes(f);
        });

        this.set("people", this.people.slice(0));
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
