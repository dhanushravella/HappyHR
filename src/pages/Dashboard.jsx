// Create a Employee Self Service Dashboard screen with the following features with beautiful resposnive design and Layout with some charts and graphs:
// 1. Create User Profile Box with User Picture, Name, Designation, Employee code, Email, Phone, Address, Emergency Contact, Bank Account Details, etc.
// 2. Create a section for Employee Leave Balance with the following details:
//     a. Annual Leave
//     b. Sick Leave
//     c. Emergency Leave
//     d. Maternity Leave
//     e. Paternity Leave
//     f. Marriage Leave
//     g. Bereavement Leave
//     h. Unpaid Leave
//     i. Other Leave
// 3. Create a section for Employee Leave History with the following details:
//     a. Leave Type
//     b. Leave Date
//     c. Leave Status
//     d. Leave Reason
//     e. Leave Duration
// 4. Create a section for Employee Expense Claim with the following details:
//     a. Expense Type
//     b. Expense Date
//     c. Expense Status
//     d. Expense Reason
//     e. Expense Amount
// 5. Create a section for Employee Expense Claim History with the following details:
//     a. Expense Type
//     b. Expense Date
//     c. Expense Status
//     d. Expense Reason
//     e. Expense Amount
// 6. Create a section for Employee Payroll with the following details:
//     a. Payroll Period
//     b. Payroll Status
//     c. Payroll Amount
//     d. Payroll Date
// 7. Create a section for Employee Payroll History with the following details:
//     a. Payroll Period
//     b. Payroll Status
//     c. Payroll Amount
//     d. Payroll Date
// 8. Create a section for Employee Timesheet with the following details:
//     a. Timesheet Period
//     b. Timesheet Status
//     c. Timesheet Hours
//     d. Timesheet Date
// 9. Create a section for Employee Timesheet History with the following details:
//     a. Timesheet Period
//     b. Timesheet Status
//     c. Timesheet Hours
//     d. Timesheet Date

// 10. Create a section for Employee Performance Review with the following details:
//     a. Review Period
//     b. Review Status
//     c. Review Date
// 11. Create a section for Employee Performance Review History with the following details:
//     a. Review Period
//     b. Review Status
//     c. Review Date
// 12. Create a section for Employee Training with the following details:
//     a. Training Period
//     b. Training Status
//     c. Training Date
// 13. Create a section for Employee Training History with the following details:
//     a. Training Period
//     b. Training Status
//     c. Training Date
// 14. Create a section for Employee Promotion with the following details:
//     a. Promotion Period
//     b. Promotion Status
//     c. Promotion Date
// 15. Create a section for Employee Promotion History with the following details:
//     a. Promotion Period
//     b. Promotion Status
//     c. Promotion Date
// 16. Create a section for Employee Warning with the following details:
//     a. Warning Period
//     b. Warning Status
//     c. Warning Date
// 17. Create a section for Employee Warning History with the following details:
//     a. Warning Period
//     b. Warning Status
//     c. Warning Date
// 18. Create a section for Employee Termination with the following details:
//     a. Termination Period
//     b. Termination Status
//     c. Termination Date
// 19. Create a section for Employee Termination History with the following details:
//     a. Termination Period
//     b. Termination Status
//     c. Termination Date
// 20. Create a section for Employee Exit Interview with the following details:
//     a. Exit Interview Period
//     b. Exit Interview Status
//     c. Exit Interview Date
// 21. Create a section for Employee Exit Interview History with the following details:
//     a. Exit Interview Period
//     b. Exit Interview Status
//     c. Exit Interview Date
// 22. Create a section for Employee Documents with the following details:
//     a. Document Type
//     b. Document Status
//     c. Document Date
// 23. Create a section for Employee Documents History with the following details:
//     a. Document Type
//     b. Document Status
//     c. Document Date
// 24. Create a section for Employee Assets with the following details:
//     a. Asset Type
//     b. Asset Status
//     c. Asset Date
// 25. Create a section for Employee Assets History with the following details:
//     a. Asset Type
//     b. Asset Status
//     c. Asset Date
// 26. Create a section for Employee Disciplinary with the following details:
//     a. Disciplinary Type
//     b. Disciplinary Status
//     c. Disciplinary Date
// 27. Create a section for Employee Disciplinary History with the following details:
//     a. Disciplinary Type
//     b. Disciplinary Status
//     c. Disciplinary Date
// 28. Create a section for Employee Complaint with the following details:
//     a. Complaint Type
//     b. Complaint Status
//     c. Complaint Date
// 29. Create a section for Employee Complaint History with the following details:
//     a. Complaint Type
//     b. Complaint Status
//     c. Complaint Date

// Path: src\pages\Employee.jsx

import React from 'react';
import { Divider, Row, Tag } from 'antd';
import Grid from '@material-ui/core/Grid';

import { DashboardLayout } from '@/layout';
import { HaiProfileCard } from '@/components/HaiProfileCard';
import PayCard from '@/components/CarousalCard';

const leaveData = [
  {
    title: 'Annual Leave',
    units: [
      {
        type: 'Available',
        value: '10',
        tagColor: '#f50',
      },
      {
        type: 'Utilised',
        value: '10',
        tagColor: '#2db7f5',
      },
      {
        type: 'Encashed',
        value: '10',
        tagColor: '#87d068',
      },
    ],
  },
  {
    title: 'Medical Leave',
    units: [
      {
        type: 'Available',
        value: '10',
        tagColor: '#f50',
      },
      {
        type: 'Utilised',
        value: '10',
        tagColor: '#2db7f5',
      },
      {
        type: 'Encashed',
        value: '10',
        tagColor: '#87d068',
      },
    ],
  },
  {
    title: 'Unpaid Leave',
    units: [
      {
        type: 'Available',
        value: '10',
        tagColor: '#f50',
      },
      {
        type: 'Utilised',
        value: '10',
        tagColor: '#2db7f5',
      },
      {
        type: 'Encashed',
        value: '10',
        tagColor: '#87d068',
      },
    ],
  },
  {
    title: 'Compassionate Leave',
    units: [
      {
        type: 'Available',
        value: '10',
        tagColor: '#f50',
      },
      {
        type: 'Utilised',
        value: '10',
        tagColor: '#2db7f5',
      },
      {
        type: 'Encashed',
        value: '10',
        tagColor: '#87d068',
      },
    ],
  },
];

const LeaveBalance = () => {
  return (
    <PayCard
      title="Leave Balance"
      titleAlign={'left'}
      colSize={24}
      midSize={24}
      content={
        <div>
          <Row gutter={[12, 12]}>
            {leaveData.map((item, index) => (
              <TopCard
                title={item.title}
                units={item.units}
                tagContent="10"
                tagColor="#f50"
                available="Available"
              />
            ))}
          </Row>
        </div>
      }
    />
  );
};

const TopCard = ({ title, units, tagContent, tagColor, prefix }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <div className="whiteBox shadow" style={{ color: '#595959' }}>
        <div className="pad5 strong" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <h3 style={{ color: '#22075e', marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        {units.map((unit, index) => (
          <div className="pad15">
            <Grid container spacing={2}>
              <Grid item className="gutter-row" xs={7} style={{ textAlign: 'left' }}>
                <div className="left">{unit.type}</div>
              </Grid>
              <Grid item className="gutter-row" xs={1}>
                <Divider
                  style={{
                    padding: '10px 0',
                    justifyContent: 'center',
                  }}
                  type="vertical"
                ></Divider>
              </Grid>
              <Grid
                item
                className="gutter-row"
                xs={4}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Tag
                  color={tagColor}
                  style={{
                    margin: '0 auto',
                    justifyContent: 'center',
                  }}
                >
                  {tagContent}
                </Tag>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <HaiProfileCard
            userName={'Prasanth'}
            designation={'Head of Innovations'}
            avatar={
              'https://sequelone.honohr.com/assets/uploads/profile_pictures/d89ac44696e5ec928a375447af785ca8.jpg'
            }
            empCode={'SMS1018'}
            department={'Engineering'}
            email={'prasanth@hono.ai'}
            phone={'+91 9876543210'}
          ></HaiProfileCard>
        </Grid>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <LeaveBalance></LeaveBalance>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
