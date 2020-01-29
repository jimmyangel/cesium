/* This file is automatically rebuilt by the Cesium build process. */
define(['./defined-26bd4a03', './Check-da037458', './freezeObject-2d83f591', './defaultValue-f2e68450', './Math-fa6e45cb', './Cartesian2-2a723276', './defineProperties-6f7a50f2', './Transforms-2d051a04', './RuntimeError-ad75c885', './WebGLConstants-497deb20', './ComponentDatatype-69643096', './GeometryAttribute-27b02fa1', './when-ee12a2cb', './GeometryAttributes-eecc9f43', './AttributeCompression-87682214', './GeometryPipeline-2328a924', './EncodedCartesian3-8b2b90d0', './IndexDatatype-3de60176', './IntersectionTests-8d42294d', './Plane-0d631df3', './GeometryOffsetAttribute-cb30cd97', './VertexFormat-fbb91dc7', './EllipseGeometryLibrary-71a50b28', './GeometryInstance-e939cd58', './EllipseGeometry-183eeb3b'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, AttributeCompression, GeometryPipeline, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, GeometryOffsetAttribute, VertexFormat, EllipseGeometryLibrary, GeometryInstance, EllipseGeometry) { 'use strict';

    function createEllipseGeometry(ellipseGeometry, offset) {
            if (defined.defined(offset)) {
                ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
            }
            ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
            ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
            return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
        }

    return createEllipseGeometry;

});
