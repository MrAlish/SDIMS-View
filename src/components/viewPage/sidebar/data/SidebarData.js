import { FaClipboardList, FaFistRaised, FaMoneyCheckAlt, FaTachometerAlt } from "react-icons/fa";

const content = [
  {
    title: "Dashboard",
    link: "/common/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Common",
    link: "",
    icon: <FaClipboardList />,
    item: [
      {
        list: "Fiscal Year",
        link: "/common/fiscal",
      },
      {
        list: "Office",
        link: "/common/office",
      },
      {
        list: "Department",
        link: "/common/department",
      },
      {
        list: "Sub Department",
        link: "/common/subdepartment",
      },
      {
        list: "Ward",
        link: "/common/ward",
      },
      {
        list: "Counter",
        link: "/common/counter",
      },
      {
        list: "Raj Patrankit Sheni",
        link: "/common/rajpatrankitsheni",
      },
      {
        list: "Shredi",
        link: "/common/shredi",
      },
      {
        list: "Post",
        link: "/common/post",
      },
      {
        list: "Sewa",
        link: "/common/sewa",
      },
      {
        list: "Group",
        link: "/common/group",
      },
      {
        list: "Sub Group",
        link: "/common/subgroup",
      },
      {
        list: "Appointment",
        link: "/common/appointment",
      },
      {
        list: "Sewa Parimad",
        link: "/common/sewaparimad",
      },
      {
        list: "PadPurti Type",
        link: "/common/padpurtitype",
      },
      {
        list: "Cast",
        link: "/common/cast",
      },
      {
        list: "Relation",
        link: "/common/relation",
      },
      {
        list: "Education",
        link: "/common/education",
      },
      {
        list: "Faculty",
        link: "/common/faculty",
      },
      {
        list: "Occupation",
        link: "/common/occupation",
      },
      {
        list: "Talim Type",
        link: "/common/talimtype",
      },
      {
        list: "Award Type",
        link: "/common/awardtype",
      },
      {
        list: "Punishment",
        link: "/common/punishment",
      },
      {
        list: "Sub Punishment",
        link: "/common/subpunishment",
      },
      {
        list: "Nationality",
        link: "/common/nationality",
      },
      {
        list: "Language",
        link: "/common/language",
      },
    ],
  },
  {
    title: "Planning Common",
    link: "",
    icon: <FaFistRaised />,
    item: [
      {
        list: "Work Area",
        link: "/planning/workarea",
      },
      {
        list: "Work Type",
        link: "/planning/worktype",
      },{
        list: "Upa Chetra",
        link: "/planning/upachetra",
      },{
        list: "Upa Chetra Detail",
        link: "/planning/upachetradetail",
      },{
        list: "Kar Katti",
        link: "/planning/karkatti",
      },{
        list: "Document Type",
        link: "/planning/document",
      },{
        list: "Bhuktani Type",
        link: "/planning/bhuktani",
      },{
        list: "Thekka Short Type",
        link: "/planning/thekkashort",
      },{
        list: "Thekka Karkatti",
        link: "/planning/thekkakarkatti",
      },{
        list: "Thekka Bhuktani Type",
        link: "/planning/thekkabhuktani",
      },{
        list: "Sarta Setup",
        link: "/planning/sarta",
      },
    ]
  },
  {
    title: "Revenue Common",
    link: "",
    icon: <FaMoneyCheckAlt />,
    item: [
      {
        list: "Building Type",
        link: "/revenue/building",
      }, {
        list: "House Rent Type",
        link: "/revenue/houserent",
      }, {
        list: "Business Type",
        link: "/revenue/business",
      }, {
        list: "Business Close Reason",
        link: "/revenue/businessclose",
      }, {
        list: "Business status",
        link: "/revenue/businessstatus",
      }, {
        list: "Business Ownership Type",
        link: "/revenue/businessowner",
      }, {
        list: "Invoice Cancel Reason",
        link: "/revenue/invoicecancel",
      }, {
        list: "Tax Payer Type",
        link: "/revenue/taxpayer",
      }, {
        list: "Vehicle Type",
        link: "/revenue/vehicle",
      }, {
        list: "Take Over Type",
        link: "/revenue/takeover",
      }, {
        list: "Vehicle Status",
        link: "/revenue/vehiclestatus",
      }, {
        list: "Vehicle Close Reason ",
        link: "/revenue/vehicleclose",
      },{
        list: "Fuel Type",
        link: "/revenue/fuel",
      },{
        list: "Service Category",
        link: "/revenue/servicecategory",
      },{
        list: "Service",
        link: "/revenue/service",
      },
    ]
    }

 
];
export default content;
