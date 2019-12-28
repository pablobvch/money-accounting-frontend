import React, { useState } from "react";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

const renderMessage = () => <span>There are no transactions</span>;

const renderUncontrolledCollapse = ({ id, amount, effectiveDate, type }) => (
  <UncontrolledCollapse toggler={`#toggler${id}`}>
    <Card>
      <CardBody>
        id: {id}
        <br />
        type: {type}
        <br />
        amount: {amount}
        <br />
        effectiveDate: {effectiveDate}
        <br />
      </CardBody>
    </Card>
  </UncontrolledCollapse>
);

const renderButton = (toggle, { id }) => (
  <Button
    color="primary"
    id={`toggler${id}`}
    onClick={toggle}
    style={{ marginBottom: "1rem" }}
  >
    Toggle
  </Button>
);

const renderTransaction = (toggle, transaction) => (
  <div>
    {renderButton(toggle, transaction)}
    {renderUncontrolledCollapse(transaction)}
  </div>
);

const renderAccordion = (account, toggle) =>
  account.transactions.map(transaction =>
    renderTransaction(toggle, transaction)
  );

const renderAccordionIfneeded = (account, toggle) =>
  account.transactions && account.transactions.length > 0
    ? renderAccordion(account, toggle)
    : renderMessage();

const AppView = ({ account }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return renderAccordionIfneeded(account, toggle);
};

export default AppView;
