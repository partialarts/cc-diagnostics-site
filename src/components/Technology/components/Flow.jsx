import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const actions = [
  {
    title: 'Request time off',
    href: '#',
    icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Benefits',
    href: '#',
    icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Schedule a one-on-one',
    href: '#',
    icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Flow() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-semibold text-gray-500">Drawstring Canister</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Use it your way</p>
              <p className="mt-4 text-gray-500">
                The Drawstring Canister comes with multiple strap and handle options to adapt throughout your day.
                Shoulder sling it, backpack it, or handy carry it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg' : '',
              actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg' : '',
              'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-ccDarkBlue',
              'flex'
            )}
          >
            <div className="flex items-center w-1/2">
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white',
                )}
              >
                <action.icon aria-hidden="true" className="h-6 w-6" />
              </span>
              <h3 className="ml-4 text-base font-semibold leading-6 text-gray-900">
                <a href={action.href} className="focus:outline-none">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {action.title}
                </a>
              </h3>
            </div>
            <div className="w-1/2 pl-4">
              <p className="text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et
                quo et molestiae.
              </p>
            </div>
          </div>
        ))}
      </div>
      </>
  );
}
