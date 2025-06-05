// import React from 'react';
// import { Bell, Lock, User, Globe, Wallet } from 'lucide-react';
// import Panel from '../champtradeComponent/dashboard/Panel';

// function SettingsPage() {
//   const settingsSections = [
//     {
//       icon: User,
//       title: 'Profile Settings',
//       options: [
//         { label: 'Update Profile Picture', type: 'button' },
//         { label: 'Change Display Name', type: 'input', value: 'John Doe' },
//         { label: 'Email Address', type: 'input', value: 'john@example.com' }
//       ]
//     },
//     {
//       icon: Lock,
//       title: 'Security',
//       options: [
//         { label: 'Change Password', type: 'button' },
//         { label: 'Two-Factor Authentication', type: 'toggle', value: true },
//         { label: 'Login History', type: 'button' }
//       ]
//     },
//     {
//       icon: Bell,
//       title: 'Notifications',
//       options: [
//         { label: 'Email Notifications', type: 'toggle', value: true },
//         { label: 'Transaction Alerts', type: 'toggle', value: true },
//         { label: 'Team Updates', type: 'toggle', value: false }
//       ]
//     },
//     {
//       icon: Wallet,
//       title: 'Payment Settings',
//       options: [
//         { label: 'Default Withdrawal Wallet', type: 'input', value: '0x1234...5678' },
//         { label: 'Auto-reinvest', type: 'toggle', value: false }
//       ]
//     }
//   ];

//   return (
//     <Panel title="Settings">
//       <div className="space-y-8">
//         {settingsSections.map(({ icon: Icon, title, options }) => (
//           <div key={title} className="space-y-4">
//             <div className="flex items-center gap-2 mb-4">
//               <Icon className="w-5 h-5 text-golden" />
//               <h3 className="text-lg font-semibold text-golden-white">{title}</h3>
//             </div>
//             <div className="space-y-4 pl-7">
//               {options.map(({ label, type, value }) => (
//                 <div key={label} className="flex items-center justify-between">
//                   <span className="text-golden-white">{label}</span>
//                   {type === 'button' ? (
//                     <button className="px-4 py-2 text-sm bg-dark-green-light text-golden-white rounded-lg hover:bg-dark-green-dark transition-colors border border-golden/20">
//                       {label}
//                     </button>
//                   ) : type === 'toggle' ? (
//                     <button
//                       className={`w-12 h-6 rounded-full transition-colors ${
//                         value ? 'bg-golden' : 'bg-dark-green-light'
//                       }`}
//                     >
//                       <div
//                         className={`w-4 h-4 bg-black rounded-full transform transition-transform ${
//                           value ? 'translate-x-7' : 'translate-x-1'
//                         }`}
//                       />
//                     </button>
//                   ) : (
//                     <input
//                       type="text"
//                       value={value}
//                       className="px-3 py-2 bg-dark-green-light border border-golden/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden/20 text-golden-white"
//                       readOnly
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </Panel>
//   );
// }

// export default SettingsPage;


import React, { useState } from 'react';
import { Bell, Lock, User, Wallet } from 'lucide-react';
import Panel from '../champtradeComponent/dashboard/Panel';

type Option =
  | { label: string; type: 'button' }
  | { label: string; type: 'input'; value: string }
  | { label: string; type: 'toggle'; value: boolean };

type SettingsSection = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  options: Option[];
};

function SettingsPage() {
  const [settings, setSettings] = useState<SettingsSection[]>([
    {
      icon: User,
      title: 'Profile Settings',
      options: [
        { label: 'Update Profile Picture', type: 'button' },
        { label: 'Change Display Name', type: 'input', value: 'John Doe' },
        { label: 'Email Address', type: 'input', value: 'john@example.com' },
      ],
    },
    {
      icon: Lock,
      title: 'Security',
      options: [
        { label: 'Change Password', type: 'button' },
        { label: 'Two-Factor Authentication', type: 'toggle', value: true },
        { label: 'Login History', type: 'button' },
      ],
    },
    {
      icon: Bell,
      title: 'Notifications',
      options: [
        { label: 'Email Notifications', type: 'toggle', value: true },
        { label: 'Transaction Alerts', type: 'toggle', value: true },
        { label: 'Team Updates', type: 'toggle', value: false },
      ],
    },
    {
      icon: Wallet,
      title: 'Payment Settings',
      options: [
        { label: 'Default Withdrawal Wallet', type: 'input', value: '0x1234...5678' },
        { label: 'Auto-reinvest', type: 'toggle', value: false },
      ],
    },
  ]);

  const handleToggle = (sectionIdx: number, optionIdx: number) => {
    setSettings((prev) => {
      const updated = [...prev];
      const option = updated[sectionIdx].options[optionIdx];

      if (option.type === 'toggle') {
        updated[sectionIdx].options[optionIdx] = {
          ...option,
          value: !option.value,
        };
      }

      return updated;
    });
  };

  return (
    <Panel title="Settings">
      <div className="space-y-8">
        {settings.map(({ icon: Icon, title, options }, sectionIdx) => (
          <div key={title} className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-5 h-5 text-golden" />
              <h3 className="text-lg font-semibold text-golden-white">{title}</h3>
            </div>
            <div className="space-y-4 pl-7">
              {options.map((option, optionIdx) => (
                <div key={`${option.label}-${optionIdx}`} className="flex items-center justify-between">
                  <span className="text-golden-white">{option.label}</span>
                  {option.type === 'button' ? (
                    <button className="px-4 py-2 text-sm bg-dark-green-light text-golden-white rounded-lg hover:bg-dark-green-dark transition-colors border border-golden/20">
                      {option.label}
                    </button>
                  ) : option.type === 'toggle' ? (
                    <button
                      onClick={() => handleToggle(sectionIdx, optionIdx)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        option.value ? 'bg-golden' : 'bg-dark-green-light'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 bg-black rounded-full transform transition-transform ${
                          option.value ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  ) : (
                    <input
                      type="text"
                      value={option.value}
                      className="px-3 py-2 bg-dark-green-light border border-golden/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-golden/20 text-golden-white"
                      readOnly
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export default SettingsPage;
