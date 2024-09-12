var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CopyofWaypoints_1 = new ol.format.GeoJSON();
var features_CopyofWaypoints_1 = format_CopyofWaypoints_1.readFeatures(json_CopyofWaypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CopyofWaypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopyofWaypoints_1.addFeatures(features_CopyofWaypoints_1);
var lyr_CopyofWaypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopyofWaypoints_1, 
                style: style_CopyofWaypoints_1,
                popuplayertitle: "Copy of Waypoints",
                interactive: true,
                title: '<img src="styles/legend/CopyofWaypoints_1.png" /> Copy of Waypoints'
            });
var format_ADMCIMAHI_2 = new ol.format.GeoJSON();
var features_ADMCIMAHI_2 = format_ADMCIMAHI_2.readFeatures(json_ADMCIMAHI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMCIMAHI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMCIMAHI_2.addFeatures(features_ADMCIMAHI_2);
var lyr_ADMCIMAHI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMCIMAHI_2, 
                style: style_ADMCIMAHI_2,
                popuplayertitle: "ADM CIMAHI",
                interactive: true,
                title: '<img src="styles/legend/ADMCIMAHI_2.png" /> ADM CIMAHI'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_vektorreva_4 = new ol.format.GeoJSON();
var features_vektorreva_4 = format_vektorreva_4.readFeatures(json_vektorreva_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektorreva_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektorreva_4.addFeatures(features_vektorreva_4);
var lyr_vektorreva_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vektorreva_4, 
                style: style_vektorreva_4,
                popuplayertitle: "vektor reva",
                interactive: true,
                title: '<img src="styles/legend/vektorreva_4.png" /> vektor reva'
            });
var format_vektorrevapakeyangwafa_5 = new ol.format.GeoJSON();
var features_vektorrevapakeyangwafa_5 = format_vektorrevapakeyangwafa_5.readFeatures(json_vektorrevapakeyangwafa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vektorrevapakeyangwafa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vektorrevapakeyangwafa_5.addFeatures(features_vektorrevapakeyangwafa_5);
var lyr_vektorrevapakeyangwafa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vektorrevapakeyangwafa_5, 
                style: style_vektorrevapakeyangwafa_5,
                popuplayertitle: "vektor reva pake yang wafa",
                interactive: true,
                title: '<img src="styles/legend/vektorrevapakeyangwafa_5.png" /> vektor reva pake yang wafa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CopyofWaypoints_1.setVisible(true);lyr_ADMCIMAHI_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_vektorreva_4.setVisible(true);lyr_vektorrevapakeyangwafa_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CopyofWaypoints_1,lyr_ADMCIMAHI_2,lyr_Buffered_3,lyr_vektorreva_4,lyr_vektorrevapakeyangwafa_5];
lyr_CopyofWaypoints_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMCIMAHI_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vektorreva_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_vektorrevapakeyangwafa_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_CopyofWaypoints_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADMCIMAHI_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_vektorreva_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_vektorrevapakeyangwafa_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_CopyofWaypoints_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ADMCIMAHI_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektorreva_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektorrevapakeyangwafa_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_vektorrevapakeyangwafa_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});