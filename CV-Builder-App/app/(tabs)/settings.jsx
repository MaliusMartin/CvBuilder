import { Ionicons } from '@expo/vector-icons'; // Icon library
import { useRouter } from 'expo-router'; // Navigation router
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const settings = () => {
  const router = useRouter(); // Initialize router for navigation

  // Component for each menu item
  const MenuItem = ({ icon, title, href }) => {
    const handlePress = async () => {
      try {
        if (href) {
          await router.push(href); // Navigate to the href route if it exists
        }
      } catch (error) {
        console.error(`Failed to navigate to ${href}:`, error);
      }
    };

    return (
      <TouchableOpacity
        className="flex-row items-center py-3 px-4"
        onPress={handlePress} // Use the handler for navigation
      >
        <Ionicons name={icon} size={24} color="#004849" />
        <Text className="ml-4 text-base font-pmedium">{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <ScrollView className="bg-white flex-1">
        <View className="p-4">
          {/* Account Section */}
          <Text className="text-xl font-psemibold text-secondary mb-4">Account</Text>
          <View className="bg-gray-100 rounded-lg mb-6">
            <MenuItem icon="person-outline" title="Edit profile" href="(set)/editprofile" />
            <MenuItem icon="shield-outline" title="Security" />
            <MenuItem icon="notifications-outline" title="Notifications" />
            <MenuItem icon="lock-closed-outline" title="Privacy" />
          </View>

          <Text className="text-xl font-psemibold text-secondary mb-4">Preference</Text>
          <View className="bg-gray-100 rounded-lg mb-6">
            <MenuItem icon="person-outline" title="Theme" href="(settings)/theme" />
            
          </View>

          {/* Support & About Section */}
          <Text className="text-xl font-psemibold mb-4 text-secondary">Support & About</Text>
          <View className="bg-gray-100 rounded-lg mb-6">
            <MenuItem icon="card-outline" title="My Subscription" />
            <MenuItem icon="help-circle-outline" title="Help & Support" />
            <MenuItem icon="document-text-outline" title="Terms and Policies" />
          </View>

          {/* Cache & Cellular Section */}
          <Text className="text-xl font-psemibold mb-4 text-secondary">Cache & Cellular</Text>
          <View className="bg-gray-100 rounded-lg mb-6">
            <MenuItem icon="trash-outline" title="Free up space" />
            <MenuItem icon="speedometer-outline" title="Data Saver" />
          </View>

          {/* Actions Section */}
          <Text className="text-xl font-psemibold mb-4 text-secondary">Actions</Text>
          <View className="bg-gray-100 rounded-lg mb-6">
            <MenuItem icon="alert-circle-outline" title="Report a problem" />
            <MenuItem icon="person-add-outline" title="Add account" />
            <MenuItem icon="log-out-outline" title="Log out" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default settings;
