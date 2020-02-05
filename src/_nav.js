export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'App Configuration',
      url: '/app-configuration',
      icon: 'icon-drop',
    },
    {
      name: 'App Versions',
      url: '/app-versions',
      icon: 'icon-drop',
    },
    {
      name: 'App Text Setting',
      url: '/app-setting',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Language',
          url: '/app-setting/language',
          icon: 'icon-puzzle',
        },
        {
          name: 'Support Text',
          url: '/support-text',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Customer',
              url: '/support-text/customer',
              icon: 'icon-puzzle',
            },
            {
              name: 'Driver',
              url: '/support-text/driver',
              icon: 'icon-puzzle',
            }
          ]
        },
        {
          name: 'Help Text',
          url: '/help-text',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Customer',
              url: '/help-text/customer',
              icon: 'icon-puzzle',
            }
          ]
        },
        {
          name: 'Cancellation Reasons',
          url: '/cancellation-reasons',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Courier',
              url: '/cancellation-reasons/courier',
              icon: 'icon-puzzle',
              children: [
                {
                  name: 'Customer',
                  url: '/cancellation-reasons/courier/customer',
                  icon: 'icon-puzzle',
                },
                {
                  name: 'Driver',
                  url: '/cancellation-reasons/courier/driver',
                  icon: 'icon-puzzle',
                },
                {
                  name: 'Dispatcher',
                  url: '/cancellation-reasons/courier/dispatcher',
                  icon: 'icon-puzzle',
                }
              ]
            },
            {
              name: 'Ride',
              url: '/cancellation-reasons/ride',
              icon: 'icon-puzzle',
              children: [
                {
                  name: 'Customer',
                  url: '/cancellation-reasons/ride/customer',
                  icon: 'icon-puzzle',
                },
                {
                  name: 'Driver',
                  url: '/cancellation-reasons/ride/driver',
                  icon: 'icon-puzzle',
                },
                {
                  name: 'Dispatcher',
                  url: '/cancellation-reasons/ride/dispatcher',
                  icon: 'icon-puzzle',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Good Types',
      url: '/good-types',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Cities',
      url: '/cities',
      icon: 'icon-book-open',
    },
    {
      name: 'Zones',
      url: '/zones',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Operation',
          url: '/zones/operation',
          icon: 'icon-puzzle',
        },
        {
          name: 'Area',
          url: '/zones/area',
          icon: 'icon-puzzle',
        },
        {
          name: 'Surge',
          url: '/zones/surge',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Vehicles',
      url: '/vehicles',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Vehicle Types',
          url: '/vehicles/operation',
          icon: 'icon-puzzle',
        },
        {
          name: 'Vehicles',
          url: '/vehicles/vehicles',
          icon: 'icon-puzzle',
        },
        {
          name: 'Vehicle Models',
          url: '/vehicles/vehicle-models',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Driver Plans',
      url: '/driver-plans',
      icon: 'icon-puzzle',
    },
    {
      name: 'Drivers',
      url: '/drivers',
      icon: 'icon-puzzle',
    },
    {
      name: 'Driver Revenue',
      url: '/driver-revenue',
      icon: 'icon-puzzle',
    },
    {
      name: 'Driver Acceptance Rate',
      url: '/driver-acceptance-rate',
      icon: 'icon-puzzle',
    },
    {
      name: 'Birds View',
      url: '/#',
      icon: 'icon-puzzle',
    },
    {
      name: 'Customers',
      url: '/customers',
      icon: 'icon-puzzle',
    },
    {
      name: 'Booking Preferences',
      url: '/booking-preferences',
      icon: 'icon-puzzle',
    },
    {
      name: 'Fare Estimate',
      url: '/fare-estimate',
      icon: 'icon-puzzle',
    },
    {
      name: 'Bookings',
      url: '/bookings',
      icon: 'icon-puzzle',
    },
    {
      name: 'Conekta',
      url: '/conekta',
      icon: 'icon-puzzle',
    },
    {
      name: 'Financials',
      url: '/financials',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Trip Invoices',
          url: '/financials/trip-invoices',
          icon: 'icon-puzzle',
        },
        {
          name: 'Account Statement',
          url: '/financials/account-statement',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Driver Wallet',
              url: '/financials/account-statement/driver-wallet',
              icon: 'icon-puzzle',
            },
            {
              name: 'Customer Wallet',
              url: '/financials/account-statement/customer-wallet',
              icon: 'icon-puzzle',
            },
            {
              name: 'App Wallet',
              url: '/financials/account-statement/app-wallet',
              icon: 'icon-puzzle',
            },
            {
              name: 'PG Wallet',
              url: '/financials/account-statement/pg-wallet',
              icon: 'icon-puzzle',
            },
            {
              name: 'Operator Wallet',
              url: '/financials/account-statement/operator-wallet',
              icon: 'icon-puzzle',
            }
          ]
        },
        {
          name: 'Payoff',
          url: '/financials/payoff',
          icon: 'icon-puzzle',
        },
        {
          name: 'Stripe Logs',
          url: '/financials/stripe-logs',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Marketing',
      url: '/marketing',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Loyalty Program',
          url: '/marketing/loyalty-program',
          icon: 'icon-puzzle',
        },
        {
          name: 'Input Trip Logs',
          url: '/marketing/input-trip-logs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Qualifying Trip Logs',
          url: '/marketing/qualifying-trip-logs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Promo Codes',
          url: '/marketing/promo-codes',
          icon: 'icon-puzzle',
        },
        {
          name: 'Promo Code Logs',
          url: '/marketing/promo-code-logs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Referral Programs',
          url: '/marketing/referral-programs',
          icon: 'icon-puzzle',
        },
        {
          name: 'Send Notification',
          url: '/marketing/send-notification',
          icon: 'icon-puzzle',
        }
      ]
    },
    {
      name: 'Logs',
      url: '/logs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Twilio',
          url: '/logs/twilio',
          icon: 'icon-puzzle',
        },
        {
          name: 'Mailgun',
          url: '/logs/mailgun',
          icon: 'icon-puzzle',
        },
        {
          name: 'Verification',
          url: '/logs/verification',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Driver',
              url: '/logs/verification/driver',
              icon: 'icon-puzzle',
            },
            {
              name: 'Customer',
              url: '/logs/verification/customer',
              icon: 'icon-puzzle',
            },
          ]
        },
      ]
    },
    {
      name: 'Ratings',
      url: '/ratings',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Driver',
          url: '/ratings/driver',
          icon: 'icon-puzzle',
        },
        {
          name: 'Customer',
          url: '/ratings/customer',
          icon: 'icon-puzzle',
        },
        {
          name: 'Configure',
          url: '/ratings/configure',
          icon: 'icon-puzzle',
          children: [
            {
              name: 'Courier',
              url: '/ratings/configure/courier',
              icon: 'icon-puzzle',
            },
            {
              name: 'Ride',
              url: '/ratings/configure/ride',
              icon: 'icon-puzzle',
            },
          ]
        },
      ]
    },
    {
      name: 'Website Pages',
      url: '/website-pages',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Terms and Conditions',
          url: '/website-pages/terms-and-conditions',
          icon: 'icon-puzzle',
        },
        {
          name: 'Privacy Policy',
          url: '/website-pages/privacy-policy',
          icon: 'icon-puzzle',
        },
      ]
    },
    {
      name: 'Reports',
      url: '/reports',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Rides Cancelled vs Expired vs Completed',
          url: '/reports/rides-comparison',
          icon: 'icon-puzzle',
        },
        {
          name: 'Drivers Per City',
          url: '/reports/driver-per-city',
          icon: 'icon-puzzle',
        },
        {
          name: 'New Drivers Per Month',
          url: '/reports/new-drivers',
          icon: 'icon-puzzle',
        },
        {
          name: 'New Users',
          url: '/reports/new-users',
          icon: 'icon-puzzle',
        },
      ]
    },
    {
      name: 'Users',
      url: '/users',
      icon: 'icon-puzzle',
    },
    {
      name: 'Central Dispatchers',
      url: '/central-dispatchers',
      icon: 'icon-puzzle',
    },
  ],
};
