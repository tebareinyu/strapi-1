import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

// import EditIcon from '../VariableEditIcon';
import GrabIconBlue from '../../assets/images/icon_grab_blue.svg';
import GrabIcon from '../../assets/images/icon_grab.svg';
import RemoveIcon from '../DraggedRemovedIcon';
import { Carret, FullWidthCarret, NameWrapper, Wrapper } from './components';

const FieldItem = forwardRef(
  (
    {
      isDragging,
      isEditing,
      name,
      onClickRemove,
      showLeftCarret,
      showRightCarret,
      size,
      style,
      type,
    },
    ref
  ) => {
    const isHidden = name === '_TEMP_';
    const withLongerHeight = [
      'json',
      'text',
      'file',
      'group',
      'WYSIWYG',
    ].includes(type);
    const carretStyle = withLongerHeight ? { height: '84px' } : {};

    return (
      <div style={{ width: `${(1 / 12) * size * 100}%`, ...style }} ref={ref}>
        <Wrapper>
          {isDragging && size === 12 ? (
            <FullWidthCarret>
              <div />
            </FullWidthCarret>
          ) : (
            <>
              {showLeftCarret && <Carret style={carretStyle} />}
              <div className="sub_wrapper">
                <NameWrapper
                  style={carretStyle}
                  isEditing={isEditing}
                  isHidden={isHidden}
                >
                  <div>
                    {!isHidden && (
                      <img
                        src={isEditing ? GrabIconBlue : GrabIcon}
                        alt="Grab Icon"
                        style={{ marginRight: 10 }}
                      />
                    )}
                    <span>{!isHidden && name}</span>
                  </div>
                  {!isHidden && (
                    <RemoveIcon
                      onClick={onClickRemove}
                      withLongerHeight={withLongerHeight}
                      isDragging={isEditing}
                    />
                  )}
                </NameWrapper>
              </div>
              {showRightCarret && <Carret right style={carretStyle} />}
            </>
          )}
        </Wrapper>
      </div>
    );
  }
);

FieldItem.defaultProps = {
  isDragging: false,
  isEditing: false,
  onClickRemove: () => {},
  showLeftCarret: false,
  showRightCarret: false,
  style: {},
  type: 'string',
};

FieldItem.propTypes = {
  isDragging: PropTypes.bool,
  isEditing: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func,
  showLeftCarret: PropTypes.bool,
  showRightCarret: PropTypes.bool,
  size: PropTypes.number.isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
};

export default FieldItem;
