import React from 'react';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Carousels = React.lazy(() => import('./views/Base/Carousels'));
const Collapses = React.lazy(() => import('./views/Base/Collapses'));
const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
const Forms = React.lazy(() => import('./views/Base/Forms'));
const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));
const Paginations = React.lazy(() => import('./views/Base/Paginations'));
const Popovers = React.lazy(() => import('./views/Base/Popovers'));
const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
const Switches = React.lazy(() => import('./views/Base/Switches'));
const Tables = React.lazy(() => import('./views/Base/Tables'));
const Tabs = React.lazy(() => import('./views/Base/Tabs'));
const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Charts = React.lazy(() => import('./views/Charts'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/Icons/Flags'));
const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
const Badges = React.lazy(() => import('./views/Notifications/Badges'));
const Modals = React.lazy(() => import('./views/Notifications/Modals'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));
const Typography = React.lazy(() => import('./views/Theme/Typography'));
const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

const Cities = React.lazy(() => import('./views/Pages/City/Cities'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/app-configuration', name: 'App Configuration' },
  { path: '/app-versions', name: 'App Versions' },
  { path: '/app-setting/language', name: 'Language' },
  { path: '/support-text/customer', name: 'Customer' },
  { path: '/support-text/driver', name: 'Driver' },
  { path: '/help-text/customer', name: 'Customer' },
  { path: '/cancellation-reasons/courier/customer', name: 'Customer' },
  { path: '/cancellation-reasons/courier/driver', name: 'Driver' },
  { path: '/cancellation-reasons/courier/dispatcher', name: 'Dispatcher' },
  { path: '/cancellation-reasons/ride/customer', name: 'Customer' },
  { path: '/cancellation-reasons/ride/driver', name: 'Driver' },
  { path: '/cancellation-reasons/ride/dispatcher', name: 'Dispatcher' },
  { path: '/good-types', name: 'Good Types' },
  { path: '/cities', name: 'Cities', component: Cities },
  { path: '/zones/operation', name: 'Operation' },
  { path: '/zones/area', name: 'Area' },
  { path: '/zones/surge', name: 'Surge' },
  { path: '/vehicles/operation', name: 'Vehicle Types' },
  { path: '/vehicles/vehicles', name: 'Vehicles' },
  { path: '/vehicles/vehicle-models', name: 'Vehicle Models' },
  { path: '/driver-plans', name: 'Driver Plans' },
  { path: '/drivers', name: 'Drivers' },
  { path: '/driver-revenue', name: 'Driver Revenue' },
  { path: '/driver-acceptance-rate', name: 'Driver Acceptance Rate' },
  { path: '/#', name: 'Birds View' },
  { path: '/customers', name: 'Customers' },
  { path: '/booking-preferences', name: 'Booking Preferences' },
  { path: '/fare-estimate', name: 'Fare Estimate' },
  { path: '/bookings', name: 'Bookings' },
  { path: '/conekta', name: 'Conekta' },
  { path: '/financials/trip-invoices', name: 'Trip Invoices' },
  { path: '/financials/account-statement/driver-wallet', name: 'Driver Wallet' },
  { path: '/financials/account-statement/customer-wallet', name: 'Customer Wallet' },
  { path: '/financials/account-statement/app-wallet', name: 'App Wallet' },
  { path: '/financials/account-statement/pg-wallet', name: 'PG Wallet' },
  { path: '/financials/account-statement/operator-wallet', name: 'Operator Wallet' },
  { path: '/financials/payoff', name: 'Payoff' },
  { path: '/financials/stripe-logs', name: 'Stripe Logs' },
  { path: '/marketing/loyalty-program', name: 'Loyalty Program' },
  { path: '/marketing/input-trip-logs', name: 'Input Trip Logs' },
  { path: '/marketing/qualifying-trip-logs', name: 'Qualifying Trip Logs' },
  { path: '/marketing/promo-codes', name: 'Promo Codes' },
  { path: '/marketing/promo-code-logs', name: 'Promo Code Logs' },
  { path: '/marketing/referral-programs', name: 'Referral Programs' },
  { path: '/marketing/send-notification', name: 'Send Notification' },
  { path: '/logs/twilio', name: 'Twilio' },
  { path: '/logs/mailgun', name: 'Mailgun' },
  { path: '/logs/verification/driver', name: 'Driver' },
  { path: '/logs/verification/customer', name: 'Customer' },
  { path: '/ratings/driver', name: 'Driver' },
  { path: '/ratings/customer', name: 'Customer' },
  { path: '/ratings/configure/courier', name: 'Courier' },
  { path: '/ratings/configure/ride', name: 'Ride' },
  { path: '/website-pages/terms-and-conditions', name: 'Terms and Conditions' },
  { path: '/website-pages/privacy-policy', name: 'Privacy Policy' },
  { path: '/reports/rides-comparison', name: 'Rides Cancelled vs Expired vs Completed' },
  { path: '/reports/driver-per-city', name: 'Drivers Per City' },
  { path: '/reports/new-drivers', name: 'New Drivers Per Month' },
  { path: '/reports/new-users', name: 'New Users' },
  { path: '/users', name: 'Users' },
  { path: '/central-dispatchers', name: 'Central Dispatchers' },


  // These are not required but kept for reusable purposes
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
