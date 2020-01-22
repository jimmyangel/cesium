/* This file is automatically rebuilt by the Cesium build process. */
define(['./defined-26bd4a03', './Check-da037458', './freezeObject-2d83f591', './defaultValue-f2e68450', './Math-fa6e45cb', './Cartesian2-2a723276', './defineProperties-6f7a50f2', './Transforms-63627dde', './RuntimeError-ad75c885', './WebGLConstants-497deb20', './ComponentDatatype-69643096', './GeometryAttribute-39cf8fbf', './when-ee12a2cb', './GeometryAttributes-eecc9f43', './AttributeCompression-87682214', './GeometryPipeline-fb57da21', './EncodedCartesian3-8b2b90d0', './IndexDatatype-3de60176', './IntersectionTests-fe7a5824', './Plane-4aa05fa3', './PrimitivePipeline-0c479585', './WebMercatorProjection-f2dc467d', './createTaskProcessorWorker'], function (defined, Check, freezeObject, defaultValue, _Math, Cartesian2, defineProperties, Transforms, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, when, GeometryAttributes, AttributeCompression, GeometryPipeline, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, PrimitivePipeline, WebMercatorProjection, createTaskProcessorWorker) { 'use strict';

    /* global require */

        var moduleCache = {};

        function getModule(moduleName) {
            var module = moduleCache[moduleName];
            if (!defined.defined(module)) {
                if (typeof exports === 'object') {
                    // Use CommonJS-style require.
                    moduleCache[module] = module = require('Workers/' + moduleName);
                } else {
                    // Use AMD-style require.
                    // in web workers, require is synchronous
                    require(['Workers/' + moduleName], function(f) {
                        module = f;
                        moduleCache[module] = f;
                    });
                }
            }
            return module;
        }

        function createGeometry(parameters, transferableObjects) {
            var subTasks = parameters.subTasks;
            var length = subTasks.length;
            var resultsOrPromises = new Array(length);

            for (var i = 0; i < length; i++) {
                var task = subTasks[i];
                var geometry = task.geometry;
                var moduleName = task.moduleName;

                if (defined.defined(moduleName)) {
                    var createFunction = getModule(moduleName);
                    resultsOrPromises[i] = createFunction(geometry, task.offset);
                } else {
                    //Already created geometry
                    resultsOrPromises[i] = geometry;
                }
            }

            return when.when.all(resultsOrPromises, function(results) {
                return PrimitivePipeline.PrimitivePipeline.packCreateGeometryResults(results, transferableObjects);
            });
        }
    var createGeometry$1 = createTaskProcessorWorker(createGeometry);

    return createGeometry$1;

});
