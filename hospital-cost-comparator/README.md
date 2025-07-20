# Hospital Cost Comparator

## Overview
The Hospital Cost Comparator is a web application designed to help users compare healthcare costs, surgery costs, checkup costs, and total expenses among hospitals in California. The application fetches data from the CMS API and presents it in an attractive, simple, and responsive user interface.

## Features
- Fetches hospital data from the CMS API.
- Displays a list of hospitals in California.
- Compares healthcare costs between hospitals.
- Compares surgery costs among hospitals.
- Compares checkup costs between hospitals.
- Summarizes total expenses for each hospital.

## Project Structure
```
hospital-cost-comparator
├── src
│   ├── api
│   │   └── cms.ts
│   ├── components
│   │   ├── HospitalList.tsx
│   │   ├── CostComparison.tsx
│   │   ├── SurgeryComparison.tsx
│   │   ├── CheckupComparison.tsx
│   │   └── ExpenseSummary.tsx
│   ├── utils
│   │   └── costUtils.ts
│   ├── styles
│   │   └── main.css
│   ├── App.tsx
│   └── types
│       └── index.ts
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd hospital-cost-comparator
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the development server:
   ```
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Integration
The application interacts with the CMS API to fetch hospital data. The API functions are defined in `src/api/cms.ts`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.