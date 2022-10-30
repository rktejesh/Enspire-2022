import React, { useEffect, useState } from 'react';
import $ from 'jquery';

export const Stats = ({ data }) => {
  useEffect(() => {
    $('.counting').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 3000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="counter-stats"
      className="wow fadeInRight"
      data-wow-duration="1.4s"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        zIndex: 100,
        margin: '0 auto',
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          {data.map(stat => (
            <>
              <div
                key={stat.id}
                className="col-lg-3 stats"
                style={{
                  textAlign: 'center',
                  fontSize: '35px',
                  fontWeight: 700,
                  fontFamily: "'Montserrat', sans-serif",
                  padding: '1.2rem 1.3rem',
                }}
              >
                <div className="counting" data-count={stat.count}>
                  0
                </div>
                <h5
                  style={{
                    fontSize: '1.5rem',
                  }}
                >
                  {stat.name}
                </h5>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
