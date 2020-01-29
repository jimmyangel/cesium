/* This file is automatically rebuilt by the Cesium build process. */
define(['./defined-26bd4a03', './Check-da037458', './freezeObject-2d83f591', './defaultValue-f2e68450', './Math-fa6e45cb', './Cartesian2-2a723276', './defineProperties-6f7a50f2', './Transforms-2d051a04', './RuntimeError-ad75c885', './WebGLConstants-497deb20', './ComponentDatatype-69643096', './GeometryAttribute-27b02fa1', './when-ee12a2cb', './GeometryAttributes-eecc9f43', './IndexDatatype-3de60176', './GeometryOffsetAttribute-cb30cd97', './VertexFormat-fbb91dc7', './CylinderGeometryLibrary-1a22ba0e', './CylinderGeometry-cdba07a2'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, IndexDatatype, GeometryOffsetAttribute, VertexFormat, CylinderGeometryLibrary, CylinderGeometry) { 'use strict';

    function createCylinderGeometry(cylinderGeometry, offset) {
            if (defined.defined(offset)) {
                cylinderGeometry = CylinderGeometry.CylinderGeometry.unpack(cylinderGeometry, offset);
            }
            return CylinderGeometry.CylinderGeometry.createGeometry(cylinderGeometry);
        }

    return createCylinderGeometry;

});
