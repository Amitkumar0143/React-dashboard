
import {
    UilEstate,
    UilClipboardAlt,
    UilUsdSquare,
    UilPackage,
    UilChart,

    UilMoneyWithdrawal,
    } from  "@iconscout/react-unicons"

export const SidebarData = [
  {
      icon: UilEstate,
      heading: 'Dashboard'
  },
  
  {
    icon: UilClipboardAlt,
    heading: 'Orders'
},
{
    icon: UilPackage,
    heading: 'Customers'
},
{
    icon: UilChart,
    heading: 'Products'
},

]

export const CardsData = [
    {
        title: 'Sales',
        color:{
            background:"linear-gradient (180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value:"25,970",
        png:UilUsdSquare,
        series:[
            {
                name:"Sales",
                data:[31, 40, 28, 51, 42, 109, 100],
            }
        ]
    },
    {
        title: 'Revenue',
        color:{
            background:"linear-gradient (180deg, #ff919d 0%, #fc929d 100%)",
            boxShadow:"0px 10px 20px 0px #fdc0c7",
        },
        barValue:70,
        value:"25,970",
        png:UilMoneyWithdrawal,
        series:[
            {
                name:"Revenue",
                data:[10, 100, 50, 70, 80, 30, 40],
            }
        ]
    },
    {
        title: 'Expenses',
        color:{
            background:"linear-gradient (rgba(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow:"0px 10px 20px 0px #f9d59b",
        },
        barValue:60,
        value:"4,3270",
        png:UilClipboardAlt,
        series:[
            {
                name:"Expenses",
                data:[10, 25, 15, 30, 12, 15, 20],
            }
        ]
    }
]