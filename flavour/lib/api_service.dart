import 'dart:convert';
import 'package:http/http.dart' as http;
import 'config.dart';

class ApiService {
  final String baseUrl = FlavorConfig.instance.baseUrl;


  static const List<String> _localUsers = [
    "Sivabharathi (Local Dev)",
    "avinash (local Dev)",
    "Narayanan(Local Dev)",
    "Suriya (Local Dev)",
    "bharathi (Local Dev)",
  ];

  Future<List<String>> fetchUsers() async {

    if (FlavorConfig.instance.isDev) {
      await Future.delayed(const Duration(milliseconds: 500));
      return _localUsers;
    }

    try {
      final response = await http.get(Uri.parse(baseUrl));
      if (response.statusCode == 200) {
        final List data = json.decode(response.body);
        return data.map((u) => "${u['name']} (prod)").toList();
      } else {
        throw Exception("Failed to load users: ${response.statusCode}");
      }
    } catch (e) {
      throw Exception("Error fetching users: $e");
    }
  }
}
