import React from "react";

function Map() {
  return (
    <section className="tc-map-style1">
      <div className="map-card wow zoomIn slow" data-wow-delay="0.2s">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15225.987132848093!2d78.402974!3d17.435921!3m2!1i1024!2i768!4f13.1!2m1!1seyecatch!5e0!3m2!1sen!2sin!4v1736477793504!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Map;
