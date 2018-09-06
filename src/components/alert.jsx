import React from 'react';
import Dialog from 'material-ui/Dialog';

export default class Alert extends React.Component {
  render() {
    return (
      <div>F
          <Dialog title="Aguarde um momento" modal={false} open={this.props.open}>Atualizando as informações</Dialog>
      </div>
    );
  }
}
