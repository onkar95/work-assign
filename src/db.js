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
        widgetGroup1: {
          widgetTitle: "Wealth Adviser Overview",
          widgetDetails: {
            "Widget1": [
              {
                widget: 1,
                title: "Total Portfolio Number",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Monthly Income",
                value: "$439,435"
              },
              {
                widget: 1,
                title: "Cash Balance",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Unrealized Gains",
                value: "$759,435"
              }
            ],
          }
        }
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: []
        }
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {}
        }
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }

      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Tone Preference",
          widgetDetails: {
            "Widget5": [
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
          }
        },

        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
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
        widgetGroup1: {
          widgetTitle: "Wealth Adviser Overview",
          widgetDetails: {
            "Widget1": [
              {
                widget: 1,
                title: "Total Portfolio Number",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Monthly Income",
                value: "$439,435"
              },
              {
                widget: 1,
                title: "Cash Balance",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Unrealized Gains",
                value: "$759,435"
              }
            ],
          }
        }
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: []
        }
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {}
        }
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }

      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Tone Preference",
          widgetDetails: {
            "Widget5": [
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
          }
        },

        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
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
    user: "user9",
    id: 3,
    tabs: ["home", "accounts", "cards", "loans", "rewards"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Banking Summary",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Checking Balance", value: "$12,500" },
              { widget: 1, title: "Savings Balance", value: "$35,200" },
              { widget: 1, title: "Credit Limit", value: "$20,000" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Spending Habits",
          widgetDetails: [
            { insight: "High spending on groceries this month." },
            { insight: "Consistent savings transfer every month." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Credit Score",
          widgetDetails: { score: "Excellent", value: 810 },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Notification Preferences",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Transaction Alerts",
                value: "SMS",
              },
              {
                widgetName: "Client Communication",
                title: "Statement Delivery",
                value: "Email",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile,
      meetingTime: "Wednesday 10:30 am",
      name: "Divya Nair",
      email: "divya.nair@bankplus.com",
      phone: "+91 86543 21090",
      location: "Hyderabad, India",
      experience: "5 years",
      certifications: ["Personal Banking Certificate"],
      specializations: ["Retail Banking", "Customer Service"],
      totalAUM: null,
      clients: 150,
      portfolios: [],
      rating: 4.5,
      returnRate: null,
      riskProfile: "N/A",
    },
  },
  {
    user: "user10",
    id: 4,
    tabs: ["overview", "holdings", "activity", "statements", "settings"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Investment Portfolio",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Current Value", value: "$285,000" },
              { widget: 1, title: "Total Contributions", value: "$200,000" },
              { widget: 1, title: "Market Value", value: "$280,000" },
            ],
          },
        },
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "Portfolio Updates",
          widgetDetails: [
            { insight: "Small cap stocks performing well." },
            { insight: "Bond yields slightly decreasing." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Risk Level",
          widgetDetails: { level: "Moderate", description: "Seeks balanced growth." },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "Upcoming Check-in",
          widgetDetails: {
            Widget3: [
              {
                widgetName: "meeting topics",
                title: "Mid-year Portfolio Review",
                time: "45 min",
              },
            ],
          },
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Document Preferences",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Statement Format",
                value: "Digital",
              },
              {
                widgetName: "Client Communication",
                title: "Communication Language",
                value: "English",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile3,
      meetingTime: "Thursday 2:30 pm",
      name: "Suresh Kumar",
      email: "suresh.kumar@investright.com",
      phone: "+91 75432 10987",
      location: "Jaipur, India",
      experience: "11 years",
      certifications: ["CWM"],
      specializations: ["Mutual Funds", "Fixed Income"],
      totalAUM: "₹180 Cr",
      clients: 85,
      portfolios: ["Conservative Hybrid", "Balanced"],
      rating: 4.7,
      returnRate: "10.5%",
      riskProfile: "Low to Moderate",
    },
  },
  {
    user: "user11",
    id: 5,
    tabs: ["dashboard", "transactions", "budgets", "reports", "goals"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Personal Finance Overview",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Total Income", value: "$6,500" },
              { widget: 1, title: "Total Expenses", value: "$4,200" },
              { widget: 1, title: "Savings Rate", value: "35.4%" },
            ],
          },
        },
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "Budget Analysis",
          widgetDetails: [
            { insight: "Over budget on entertainment last month." },
            { insight: "Transportation costs lower than average." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Financial Health",
          widgetDetails: { status: "Stable", recommendations: [] },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Communication Schedule",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Regular Updates",
                value: "Monthly",
              },
              {
                widgetName: "Client Communication",
                title: "Contact Person",
                value: "Assistant",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile,
      meetingTime: "Friday 11:45 am",
      name: "Meera Gupta",
      email: "meera.gupta@moneywise.org",
      phone: "+91 94321 09876",
      location: "Lucknow, India",
      experience: "4 years",
      certifications: ["Financial Planning Associate"],
      specializations: ["Personal Budgeting", "Debt Management"],
      totalAUM: null,
      clients: 65,
      portfolios: [],
      rating: 4.65,
      returnRate: null,
      riskProfile: "N/A",
    },
  },
  {
    user: "user12",
    id: 6,
    tabs: ["overview", "portfolio", "research", "trade", "history"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Trading Summary",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Account Value", value: "$95,000" },
              { widget: 1, title: "Today's Trades", value: "5" },
              { widget: 1, title: "YTD Profit", value: "$7,800" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Market Analysis",
          widgetDetails: [
            { insight: "Tech sector showing signs of correction." },
            { insight: "Energy stocks gaining momentum." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Portfolio Risk",
          widgetDetails: { score: "High", strategy: "Active Trading" },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "Trading Ideas",
          widgetDetails: {
            Widget3: [
              {
                widgetName: "meeting topics",
                title: "Short-term Trading Opportunities",
                time: "30 min",
              },
            ],
          },
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Alert Settings",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Price Alerts",
                value: "On",
              },
              {
                widgetName: "Client Communication",
                title: "Market News",
                value: "Off",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile1,
      meetingTime: "Monday 3:15 pm",
      name: "Kunal Sharma",
      email: "kunal.sharma@fasttrade.net",
      phone: "+91 93210 98765",
      location: "Gurgaon, India",
      experience: "7 years",
      certifications: ["NSE Certified Market Professional"],
      specializations: ["Day Trading", "Swing Trading"],
      totalAUM: null,
      clients: 40,
      portfolios: ["Aggressive Growth"],
      rating: 4.55,
      returnRate: null,
      riskProfile: "Very High",
    },
  },
  {
    user: "user13",
    id: 7,
    tabs: ["summary", "accounts", "transfers", "statements", "help"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Financial Summary",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Total Assets", value: "$670,000" },
              { widget: 1, title: "Total Liabilities", value: "$150,000" },
              { widget: 1, title: "Net Worth", value: "$520,000" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Asset Allocation",
          widgetDetails: [
            { insight: "Majority of assets in real estate." },
            { insight: "Diversification across multiple investment types." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Risk Profile",
          widgetDetails: { level: "Conservative", description: "Focus on capital preservation." },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "Consultation",
          widgetDetails: {
            Widget3: [
              {
                widgetName: "meeting topics",
                title: "Long-term Financial Planning",
                time: "60 min",
              },
            ],
          },
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Preferred Communication",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Primary Method",
                value: "Email",
              },
              {
                widgetName: "Client Communication",
                title: "Response Time",
                value: "24 hours",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile3,
      meetingTime: "Tuesday 9:00 am",
      name: "Pooja Verma",
      email: "pooja.verma@wealthguard.com",
      phone: "+91 92109 87654",
      location: "Chandigarh, India",
      experience: "13 years",
      certifications: ["CFP", "CLU"],
      specializations: ["Estate Planning", "Wealth Transfer"],
      totalAUM: "₹250 Cr",
      clients: 100,
      portfolios: ["Capital Preservation", "Income Focused"],
      rating: 4.9,
      returnRate: "9.5%",
      riskProfile: "Very Low",
    },
  },
  {
    user: "user14",
    id: 8,
    tabs: ["overview", "transactions", "statements", "analysis", "support"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Account Overview",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Current Balance", value: "$48,000" },
              { widget: 1, title: "Available Balance", value: "$45,500" },
              { widget: 1, title: "Pending Transactions", value: "2" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Transaction History",
          widgetDetails: [
            { insight: "Large withdrawal on 2025-05-05." },
            { insight: "Recurring payment set up for utilities." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Spending Risk",
          widgetDetails: { category: "High", details: "Increased discretionary spending." },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Alert Preferences",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Low Balance Alert",
                value: "On",
              },
              {
                widgetName: "Client Communication",
                title: "Unusual Activity Alert",
                value: "On",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile2,
      meetingTime: "Wednesday 4:00 pm",
      name: "Rina Patel",
      email: "rina.patel@easyfinance.com",
      phone: "+91 91098 76543",
      location: "Surat, India",
      experience: "3 years",
      certifications: ["Basic Banking Certification"],
      specializations: ["Account Management", "Customer Support"],
      totalAUM: null,
      clients: 200,
      portfolios: [],
      rating: 4.4,
      returnRate: null,
      riskProfile: "N/A",
    },
  },
  {
    user: "user1",
    id: 15,
    tabs: ["tab1", "tab2", "tab3", "tab4", "tab5"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Wealth Adviser Overview",
          widgetDetails: {
            "Widget1": [
              {
                widget: 1,
                title: "Total Portfolio Number",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Monthly Income",
                value: "$439,435"
              },
              {
                widget: 1,
                title: "Cash Balance",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Unrealized Gains",
                value: "$759,435"
              }
            ],
          }
        }
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: []
        }
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {}
        }
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }

      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Tone Preference",
          widgetDetails: {
            "Widget5": [
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
          }
        },

        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
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
    id: 14,
    tabs: ["tab1", "tab2", "tab3"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Wealth Adviser Overview",
          widgetDetails: {
            "Widget1": [
              {
                widget: 1,
                title: "Total Portfolio Number",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Monthly Income",
                value: "$439,435"
              },
              {
                widget: 1,
                title: "Cash Balance",
                value: "$439,759,435"
              },
              {
                widget: 1,
                title: "Unrealized Gains",
                value: "$759,435"
              }
            ],
          }
        }
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: []
        }
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {}
        }
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "",
          widgetDetails: {
            "Widget3": [
              {
                widgetName: "meeting topics",
                title: "Investment Basics Review",
                value1: " Understanding growth potential",
                value2: " Risk tolerance assessment",
                time: "13 min",
                value3: " Exploring different asset classes",
              },
              {
                widgetName: "meeting topics",
                title: "Portfolio Allociation for Growth",
                value1: " current allociation analysis",
                value2: " Identifying Growth Opportunities",
                time: "13 min",
                value3: " Diversification for Long-Term Gains",
              },
              {
                widgetName: "meeting topics",
                title: "Interactive Discussion & Action Items",
                value1: " Addressing Specific Investment Goals",
                value2: "Defining Initial Steps for Portfolio Adjustment",
                time: "13 min",
              }
            ]
          }
        }

      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Tone Preference",
          widgetDetails: {
            "Widget5": [
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
          }
        },

        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
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
    user: "user9",
    id: 9,
    tabs: ["home", "accounts", "cards", "loans", "rewards"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Banking Summary",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Checking Balance", value: "$12,500" },
              { widget: 1, title: "Savings Balance", value: "$35,200" },
              { widget: 1, title: "Credit Limit", value: "$20,000" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Spending Habits",
          widgetDetails: [
            { insight: "High spending on groceries this month." },
            { insight: "Consistent savings transfer every month." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Credit Score",
          widgetDetails: { score: "Excellent", value: 810 },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: null,
          widgetDetails: {},
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Notification Preferences",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Transaction Alerts",
                value: "SMS",
              },
              {
                widgetName: "Client Communication",
                title: "Statement Delivery",
                value: "Email",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile,
      meetingTime: "Wednesday 10:30 am",
      name: "Divya Nair",
      email: "divya.nair@bankplus.com",
      phone: "+91 86543 21090",
      location: "Hyderabad, India",
      experience: "5 years",
      certifications: ["Personal Banking Certificate"],
      specializations: ["Retail Banking", "Customer Service"],
      totalAUM: null,
      clients: 150,
      portfolios: [],
      rating: 4.5,
      returnRate: null,
      riskProfile: "N/A",
    },
  },
  {
    user: "user10",
    id: 10,
    tabs: ["overview", "holdings", "activity", "statements", "settings"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Investment Portfolio",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Current Value", value: "$285,000" },
              { widget: 1, title: "Total Contributions", value: "$200,000" },
              { widget: 1, title: "Market Value", value: "$280,000" },
            ],
          },
        },
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "Portfolio Updates",
          widgetDetails: [
            { insight: "Small cap stocks performing well." },
            { insight: "Bond yields slightly decreasing." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Risk Level",
          widgetDetails: { level: "Moderate", description: "Seeks balanced growth." },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "Upcoming Check-in",
          widgetDetails: {
            Widget3: [
              {
                widgetName: "meeting topics",
                title: "Mid-year Portfolio Review",
                time: "45 min",
              },
            ],
          },
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Document Preferences",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Statement Format",
                value: "Digital",
              },
              {
                widgetName: "Client Communication",
                title: "Communication Language",
                value: "English",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile3,
      meetingTime: "Thursday 2:30 pm",
      name: "Suresh Kumar",
      email: "suresh.kumar@investright.com",
      phone: "+91 75432 10987",
      location: "Jaipur, India",
      experience: "11 years",
      certifications: ["CWM"],
      specializations: ["Mutual Funds", "Fixed Income"],
      totalAUM: "₹180 Cr",
      clients: 85,
      portfolios: ["Conservative Hybrid", "Balanced"],
      rating: 4.7,
      returnRate: "10.5%",
      riskProfile: "Low to Moderate",
    },
  },
  {
    user: "user11",
    id: 11,
    tabs: ["dashboard", "transactions", "budgets", "reports", "goals"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Personal Finance Overview",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Total Income", value: "$6,500" },
              { widget: 1, title: "Total Expenses", value: "$4,200" },
              { widget: 1, title: "Savings Rate", value: "35.4%" },
            ],
          },
        },
      },
      "Insights": {
        widgetGroup1: {
          widgetTitle: "Budget Analysis",
          widgetDetails: [
            { insight: "Over budget on entertainment last month." },
            { insight: "Transportation costs lower than average." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Financial Health",
          widgetDetails: { status: "Stable", recommendations: [] },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: null,
          widgetDetails: {},
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Communication Schedule",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Regular Updates",
                value: "Monthly",
              },
              {
                widgetName: "Client Communication",
                title: "Contact Person",
                value: "Assistant",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile,
      meetingTime: "Friday 11:45 am",
      name: "Meera Gupta",
      email: "meera.gupta@moneywise.org",
      phone: "+91 94321 09876",
      location: "Lucknow, India",
      experience: "4 years",
      certifications: ["Financial Planning Associate"],
      specializations: ["Personal Budgeting", "Debt Management"],
      totalAUM: null,
      clients: 65,
      portfolios: [],
      rating: 4.65,
      returnRate: null,
      riskProfile: "N/A",
    },
  },
  {
    user: "user12",
    id: 12,
    tabs: ["overview", "portfolio", "research", "trade", "history"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Trading Summary",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Account Value", value: "$95,000" },
              { widget: 1, title: "Today's Trades", value: "5" },
              { widget: 1, title: "YTD Profit", value: "$7,800" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Market Analysis",
          widgetDetails: [
            { insight: "Tech sector showing signs of correction." },
            { insight: "Energy stocks gaining momentum." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Portfolio Risk",
          widgetDetails: { score: "High", strategy: "Active Trading" },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "Trading Ideas",
          widgetDetails: {
            Widget3: [
              {
                widgetName: "meeting topics",
                title: "Short-term Trading Opportunities",
                time: "30 min",
              },
            ],
          },
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Alert Settings",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Price Alerts",
                value: "On",
              },
              {
                widgetName: "Client Communication",
                title: "Market News",
                value: "Off",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile1,
      meetingTime: "Monday 3:15 pm",
      name: "Kunal Sharma",
      email: "kunal.sharma@fasttrade.net",
      phone: "+91 93210 98765",
      location: "Gurgaon, India",
      experience: "7 years",
      certifications: ["NSE Certified Market Professional"],
      specializations: ["Day Trading", "Swing Trading"],
      totalAUM: null,
      clients: 40,
      portfolios: ["Aggressive Growth"],
      rating: 4.55,
      returnRate: null,
      riskProfile: "Very High",
    },
  },
  {
    user: "user13",
    id: 13,
    tabs: ["summary", "accounts", "transfers", "statements", "help"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Financial Summary",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Total Assets", value: "$670,000" },
              { widget: 1, title: "Total Liabilities", value: "$150,000" },
              { widget: 1, title: "Net Worth", value: "$520,000" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Asset Allocation",
          widgetDetails: [
            { insight: "Majority of assets in real estate." },
            { insight: "Diversification across multiple investment types." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Risk Profile",
          widgetDetails: { level: "Conservative", description: "Focus on capital preservation." },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: "Consultation",
          widgetDetails: {
            Widget3: [
              {
                widgetName: "meeting topics",
                title: "Long-term Financial Planning",
                time: "60 min",
              },
            ],
          },
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Preferred Communication",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Primary Method",
                value: "Email",
              },
              {
                widgetName: "Client Communication",
                title: "Response Time",
                value: "24 hours",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile3,
      meetingTime: "Tuesday 9:00 am",
      name: "Pooja Verma",
      email: "pooja.verma@wealthguard.com",
      phone: "+91 92109 87654",
      location: "Chandigarh, India",
      experience: "13 years",
      certifications: ["CFP", "CLU"],
      specializations: ["Estate Planning", "Wealth Transfer"],
      totalAUM: "₹250 Cr",
      clients: 100,
      portfolios: ["Capital Preservation", "Income Focused"],
      rating: 4.9,
      returnRate: "9.5%",
      riskProfile: "Very Low",
    },
  },
  {
    user: "user14",
    id: 16,
    tabs: ["overview", "transactions", "statements", "analysis", "support"],
    dynamicTabs: {
      "Overview": {
        widgetGroup1: {
          widgetTitle: "Account Overview",
          widgetDetails: {
            Widget1: [
              { widget: 1, title: "Current Balance", value: "$48,000" },
              { widget: 1, title: "Available Balance", value: "$45,500" },
              { widget: 1, title: "Pending Transactions", value: "2" },
            ],
          },
        },
      },
      Insights: {
        widgetGroup1: {
          widgetTitle: "Transaction History",
          widgetDetails: [
            { insight: "Large withdrawal on 2025-05-05." },
            { insight: "Recurring payment set up for utilities." },
          ],
        },
      },
      "risk Analysis": {
        widgetGroup1: {
          widgetTitle: "Spending Risk",
          widgetDetails: { category: "High", details: "Increased discretionary spending." },
        },
      },
      "Meeting Agenda": {
        widgetGroup1: {
          widgetTitle: null,
          widgetDetails: {},
        },
      },
      "Client Communication": {
        widgetGroup1: {
          widgetTitle: "Alert Preferences",
          widgetDetails: {
            Widget5: [
              {
                widgetName: "Client Communication",
                title: "Low Balance Alert",
                value: "On",
              },
              {
                widgetName: "Client Communication",
                title: "Unusual Activity Alert",
                value: "On",
              },
            ],
          },
        },
        widgetGroup2: {
          widgetTitle:null,
          widgetDetails: {
            "Widget6": [
              {

                widgetTitle: "Key Topics",
                widgetDetails: {
                  "Widget5": [
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
                  ]
                },
                subtitle1: "Key Metrics",
                text: "Asset Allocation  Risk Tolerance Diversification"
              },

              {

                widgetTitle: "Communication Structure",
                widgetDetails:{
                  "Widget5": [
                    {
                      title: " Explanation Style",
                      value: "Hands-on demonstrations",
                    },
                    {
                      title: "Complexity Level",
                      value: "Beginner",
                    },
                  ],
                },
                subtitle1: "Focus Area",
                text: "• Understanding asset classes Building a diversified portfolio Setting financial goals"
              }
            ]
          }

        }
      },
    },
    adviser: {
      profile: pofile2,
      meetingTime: "Wednesday 4:00 pm",
      name: "Rina Patel",
      email: "rina.patel@easyfinance.com",
      phone: "+91 91098 76543",
      location: "Surat, India",
      experience: "3 years",
      certifications: ["Basic Banking Certification"],
      specializations: ["Account Management", "Customer Support"],
      totalAUM: null,
      clients: 200,
      portfolios: [],
      rating: 4.4,
      returnRate: null,
      riskProfile: "N/A",
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