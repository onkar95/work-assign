import { Settings } from "lucide-react";
import {
  GoHome,
  GoHomeFill,
  GoCheckCircle,
  GoCheckCircleFill,
  GoPeople,
} from "react-icons/go";
import pofile1 from './assets/profile.png'
import pofile from './assets/profileimg.jfif'
import pofile2 from './assets/profile2.jfif'
import pofile3 from './assets/profile3.jfif'

export const themes = [
  "light",
  "dark",
]
export const UserData = [
  {
    user: "user1",
    id: 1,
    tabs: ["tab1", "tab2", "tab3", "tab4", "tab5"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        // widget5: {
        //   widget: 1,
        //   title: "YTD Return",
        //   value: "9.5%"
        // }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {
        widget1: {
          widgetName: "meeting topics",
          title: "Investment Basics Review",
          value1: " Understanding growth potential",
          value2: " Risk tolerance assessment",
          time: "13 min",
          value3: " Exploring different asset classes",
        },
        widget2: {
          widgetName: "meeting topics",
          title: "Portfolio Allociation for Growth",
          value1: " current allociation analysis",
          value2: " Identifying Growth Opportunities",
          time: "13 min",
          value3: " Diversification for Long-Term Gains",
        },
        widget3: {
          widgetName: "meeting topics",
          title: "Interactive Discussion & Action Items",
          value1: " Addressing Specific Investment Goals",
          value2: "Defining Initial Steps for Portfolio Adjustment",
          time: "13 min",
        },

      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "meeting topics",
          title: "Investment Basics Review",
          value1: " Understanding growth potential",
          value2: " Risk tolerance assessment",
          time: "13 min",
          value3: " Exploring different asset classes",
        },
        widget2: {
          widgetName: "meeting topics",
          title: "Portfolio Allociation for Growth",
          value1: " current allociation analysis",
          value2: " Identifying Growth Opportunities",
          time: "13 min",
          value3: " Diversification for Long-Term Gains",
        },
        widget3: {
          widgetName: "meeting topics",
          title: "Interactive Discussion & Action Items",
          value1: " Addressing Specific Investment Goals",
          value2: "Defining Initial Steps for Portfolio Adjustment",
          time: "13 min",
        },
      },
      "Client Communication": {
        first: {
          widgetTitle: "Tone Preference",
          subWidget1: [
            {
              widgetName: "Client Communication",
              title: "Technical Level",
              value: " Basic",
            },
            {
              widgetName: "Client Communication",
              title: " Formality",
              value: " Casual",
            },
            {
              widgetName: "Client Communication",
              title: " Detail Depth ",
              value: " Overview",
            },
          ]
        },

        second: [
          {

            widgetName: "second",
            widgetTitle: "Key Topics",
            subWidget1: [
              {
                title: "Topics",
                value: "Portfolio Basics",
              },

              {
                title: "Emphasis",
                value: "High",
              },
              {
                title: "Technical Context ",
                value: "Foundational",
              },
            ],
            subtitle1: "Key Metrics",
            text: "Asset Allocation  Risk Tolerance Diversification"
          },
          {

            widgetName: "second",
            widgetTitle: "Communication Structure",
            subWidget1: [
              {
                title: " Explanation Style",
                value: "Hands-on demonstrations",
              },
              {
                title: "Complexity Level",
                value: "Beginner",
              },
            ],
            subtitle1: "Focus Area",
            text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
          },
        ]
      }
    },
    adviser: {
      profile: pofile,
      meetingTime: "Today 11:30 pm",
      name: "Rohit Mehra",
      email: "rohit.mehra@wealthpro.com",
      phone: "+91 98765 43210",
      location: "Mumbai, India",
      experience: "10 years",
      certifications: ["CFP", "CFA Level 2"],
      specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
      totalAUM: "₹150 Cr",
      clients: 75,
      portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
      rating: 4.8,
      returnRate: "13.5%",
      riskProfile: "Moderate",
    },
  },
  {
    user: "user2",
    id: 2,
    tabs: ["tab1", "tab2", "tab3"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$7,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$6,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$89,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9%"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile1,
      meetingTime: "Today 11:30 pm",
      name: "Anita Sharma",
      email: "anita.sharma@wealthpro.com",
      phone: "+91 99876 54321",
      location: "Delhi, India",
      experience: "8 years",
      certifications: ["CFP"],
      specializations: ["Tax Optimization", "Debt Planning"],
      totalAUM: "₹100 Cr",
      clients: 60,
      portfolios: ["Balanced", "Retirement"],
      rating: 4.6,
      returnRate: "12.8%",
      riskProfile: "Conservative",
    },
  },
  {
    user: "user3",
    id: 3,
    tabs: ["tab1", "tab2"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$3,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$90,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile3,
      meetingTime: "Today 11:30 pm",
      name: "Manoj Patel",
      email: "manoj.patel@wealthpro.com",
      phone: "+91 91234 56789",
      location: "Ahmedabad, India",
      experience: "5 years",
      certifications: ["CFA Level 1"],
      specializations: ["Mutual Funds", "Goal-Based Planning"],
      totalAUM: "₹50 Cr",
      clients: 35,
      portfolios: ["Aggressive Growth", "Balanced"],
      rating: 4.3,
      returnRate: "11.2%",
      riskProfile: "Moderate",
    },
  },
  {
    user: "user4",
    id: 4,
    tabs: ["tab1", "tab2", "tab3", "tab4"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile2,
      meetingTime: "Today 11:30 pm",
      name: "Neha Verma",
      email: "neha.verma@wealthpro.com",
      phone: "+91 98700 12345",
      location: "Bangalore, India",
      experience: "7 years",
      certifications: ["CFP", "NISM XA"],
      specializations: ["Equity Investments", "Retirement Planning"],
      totalAUM: "₹80 Cr",
      clients: 50,
      portfolios: ["Balanced", "Retirement"],
      rating: 4.7,
      returnRate: "12.5%",
      riskProfile: "Balanced",
    },
  },
  {
    user: "user5",
    id: 5,
    tabs: ["tab1", "tab2", "tab3"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile,
      meetingTime: "Today 11:30 pm",
      name: "Rajesh Iyer",
      email: "rajesh.iyer@wealthpro.com",
      phone: "+91 97654 32109",
      location: "Chennai, India",
      experience: "9 years",
      certifications: ["CFA Level 2", "CFP"],
      specializations: ["Portfolio Rebalancing", "Tax Optimization"],
      totalAUM: "₹120 Cr",
      clients: 70,
      portfolios: ["Aggressive Growth", "Balanced"],
      rating: 4.9,
      returnRate: "14.2%",
      riskProfile: "Aggressive",
    },
  },
  {
    user: "user3",
    id: 3,
    tabs: ["tab1", "tab2"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$9,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$3,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile1,
      meetingTime: "Today 11:30 pm",
      name: "Manoj Patel",
      email: "manoj.patel@wealthpro.com",
      phone: "+91 91234 56789",
      location: "Ahmedabad, India",
      experience: "5 years",
      certifications: ["CFA Level 1"],
      specializations: ["Mutual Funds", "Goal-Based Planning"],
      totalAUM: "₹50 Cr",
      clients: 35,
      portfolios: ["Aggressive Growth", "Balanced"],
      rating: 4.3,
      returnRate: "11.2%",
      riskProfile: "Moderate",
    },
  },
  {
    user: "user4",
    id: 4,
    tabs: ["tab1", "tab2", "tab3", "tab4"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile2,
      meetingTime: "Today 11:30 pm",
      name: "Neha Verma",
      email: "neha.verma@wealthpro.com",
      phone: "+91 98700 12345",
      location: "Bangalore, India",
      experience: "7 years",
      certifications: ["CFP", "NISM XA"],
      specializations: ["Equity Investments", "Retirement Planning"],
      totalAUM: "₹80 Cr",
      clients: 50,
      portfolios: ["Balanced", "Retirement"],
      rating: 4.7,
      returnRate: "12.5%",
      riskProfile: "Balanced",
    },
  },
  {
    user: "user5",
    id: 5,
    tabs: ["tab1", "tab2", "tab3"],
    dynamicTabs: {
      "Overview": {
        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "Insights": {

        widget1: {
          widget: 1,
          title: "Total Portfolio Number",
          value: "$439,759,435"
        },
        widget2: {
          widget: 1,
          title: "Monthly Income",
          value: "$439,435"
        },
        widget3: {
          widget: 1,
          title: "Cash Balance",
          value: "$439,759,435"
        },
        widget4: {
          widget: 1,
          title: "Unrealized Gains",
          value: "$759,435"
        },
        widget5: {
          widget: 1,
          title: "YTD Return",
          value: "9 %"
        }
      },
      "risk Analysis": {

        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Meeting Agenda": {
        widget1: {
          widgetName: "Overview",
          name: "Rohit Mehra",
          email: "rohit.mehra@wealthpro.com",
          phone: "+91 98765 43210",
          location: "Mumbai, India",
        },
        widget2: {
          widgetName: "Insights",
          experience: "10 years",
          certifications: ["CFP", "CFA Level 2"],
          specializations: ["Retirement Planning", "Tax Optimization", "Equity Investments"],
        },
        widget3: {
          widgetName: "risk Analysis",
          totalAUM: "₹150 Cr",
          clients: 75,
          portfolios: ["Aggressive Growth", "Balanced", "Retirement"],
        },
        widget4: {
          widgetName: "Meeting Agenda",
          rating: 4.8,
          returnRate: "13.5%",
          riskProfile: "Moderate",
        },
        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      },
      "Client Communication": {

        widget4: {
          widgetName: "Client Communication",
          datafields: "value"
        },
      }
    },
    adviser: {
      profile: pofile,
      meetingTime: "Today 11:30 pm",
      name: "Rajesh Iyer",
      email: "rajesh.iyer@wealthpro.com",
      phone: "+91 97654 32109",
      location: "Chennai, India",
      experience: "9 years",
      certifications: ["CFA Level 2", "CFP"],
      specializations: ["Portfolio Rebalancing", "Tax Optimization"],
      totalAUM: "₹120 Cr",
      clients: 70,
      portfolios: ["Aggressive Growth", "Balanced"],
      rating: 4.9,
      returnRate: "14.2%",
      riskProfile: "Aggressive",
    },
  },
];


export const routes = [
  {
    href: "/",
    label: "Home",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    href: "/tasks",
    label: "My Tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    href: "/members",
    label: "Members",
    icon: GoPeople,
    activeIcon: GoPeople,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
    activeIcon: Settings,
  },
];



// "Overview": {
//   widget1: {
//     widgetName: "Total Portfolio Number",
//     widgetData: {
//       name: "Rohit Mehra",
//       email: "rohit.mehra@wealthpro.com",
//       phone: "+91 98765 43210",
//       location: "Mumbai, India",
//     }
//   },
//   widget2: {
//     widgetName: "Monthly Income",
//     widgetData: {
//       name: "Rohit Mehra",
//       email: "rohit.mehra@wealthpro.com",
//       phone: "+91 98765 43210",
//       location: "Mumbai, India",
//     }
//   },
//   widget3: {
//     widgetName: "Cash Balance",
//     widgetData: {
//       name: "Rohit Mehra",
//       email: "rohit.mehra@wealthpro.com",
//       phone: "+91 98765 43210",
//       location: "Mumbai, India",
//     }
//   },
// },