import 'package:flutter/material.dart';

enum Environment { dev, prod }

class FlavorConfig {
  //this have all env related settings
  final Environment environment;
  final String appName;
  final String baseUrl;
  final Color primaryColor;

  static FlavorConfig? _instance;


  FlavorConfig._internal(
    this.environment,
    this.appName,
    this.baseUrl,
    this.primaryColor,
  );

  static void initialize({
    required Environment environment,
    required String appName,
    required String baseUrl,
    required Color primaryColor,
  }) {
    _instance = FlavorConfig._internal(
      environment,
      appName,
      baseUrl,
      primaryColor,
    );
  }

  static FlavorConfig get instance {
    if (_instance == null) {
      throw Exception("FlavorConfig must be initialized by calling initialize() first.");
    }
    return _instance!;
  }

  bool get isDev => environment == Environment.dev;
  bool get isProd => environment == Environment.prod;
}