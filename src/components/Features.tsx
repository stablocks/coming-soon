import {
  BriefcaseIcon,
  CashIcon,
  ChartSquareBarIcon,
  IdentificationIcon,
  OfficeBuildingIcon,
  TemplateIcon,
  SpeakerphoneIcon,
  SupportIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'

const features = [
  { name: 'Essentials', description: 'Manage your organization\'s employees and departments with Google Workspace and Microsoft Office integrations', icon: OfficeBuildingIcon },
  { name: 'CRM', description: 'Provide an easy way for your marketing, sales, or any other team to manage their contacts and companies', icon: IdentificationIcon },
  { name: 'Marketing', description: '', icon: SpeakerphoneIcon },
  { name: 'Sales', description: '', icon: ChartSquareBarIcon },
  { name: 'Finance', description: 'View your business finances with invoicing, accounting, and expense management', icon: CashIcon },
  { name: 'HR', description: '', icon: UserGroupIcon },
  { name: 'Recruiting', description: 'Manage your talent pool with job posting and application management', icon: BriefcaseIcon },
  { name: 'Helpdesk', description: 'Provide a helpdesk to your clients with ticketing and chat', icon: SupportIcon },
  { name: 'Projects', description: 'Manage projects across your organization with tasks', icon: TemplateIcon },
]

export default function Features() {
  return (
    <section id="modules" className="bg-indigo-700">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Modules</h2>
        <p className="mt-4 max-w-3xl text-lg text-indigo-200">
          Our modular software approach lets you pick and choose what you need for your business. Want it all? Great! Only need a few features? That's great too!
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div className="flex items-center">
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <h3 className="ml-3 text-lg font-medium text-white">{feature.name}</h3>
              </div>
              <div className="mt-6">
                <p className="mt-2 text-base text-indigo-200">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}