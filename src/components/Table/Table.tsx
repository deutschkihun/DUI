import classNames from 'classnames';
import * as React from "react";
import PropTypes from 'prop-types';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
    striped?: boolean | string;
    bordered?: boolean;
    borderless?: boolean;
    hover?: boolean;
    size?: string;
    variant?: string;  
}

const propTypes = {
  striped: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  hover: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
};

const Table = React.forwardRef<HTMLTableElement, TableProps>(
    (
      {
        className,
        striped,
        bordered,
        borderless,
        hover,
        size,
        variant,
        ...props
      },
      ref,
    ) => {

    const classes = classNames(
    className,
    variant && `${variant}`,
    size && `${size}`,
    striped && `${ typeof striped === `striped-${striped}` ? `striped-${striped}` : 'striped'}`,
    bordered && `bordered`,
    borderless && `borderless`,
    hover && `hover`,
    );
    const table = <table {...props} className={classes} ref={ref} />;
    return table;
    },
  );

Table.propTypes = propTypes;

export default Table